import { randomUUID } from 'node:crypto';
import { idempotent, save } from './documents.mjs';
import { fail, fieldText, integer } from './input.mjs';
import { bump } from './shops.mjs';

export const payrollColumns = `id,employee_id AS "employeeId",period,earnings,deductions,net,
  document_id AS "documentId",reversal_id AS "reversalId",created_at AS "createdAt"`;

export async function createEmployee(client, shop, body) {
  const { rows: [employee] } = await client.query(
    'INSERT INTO employees(shop_id,id,name) VALUES ($1,$2,$3) RETURNING id,name',
    [shop.id, randomUUID(), fieldText(body.name, 'name', 120)],
  );
  await bump(client, shop.id);
  return employee;
}

export function recordPayroll(client, shop, user, employeeId, body, key) {
  return idempotent(client, shop.id, key, ['payroll', user.id, employeeId, body], async () => {
    const period = fieldText(body.period, 'period', 7);
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(period)) fail(400, 'invalid_period');
    const earnings = integer(body.earnings, 'earnings');
    const deductions = integer(body.deductions ?? 0, 'deductions', { zero: true });
    if (deductions >= earnings) fail(400, 'invalid_deductions');
    const employee = await client.query('SELECT 1 FROM employees WHERE shop_id=$1 AND id=$2', [shop.id, employeeId]);
    if (!employee.rowCount) fail(404, 'employee_not_found');
    const current = await client.query(
      'SELECT 1 FROM payroll_payments WHERE shop_id=$1 AND employee_id=$2 AND period=$3 AND reversal_id IS NULL',
      [shop.id, employeeId, period],
    );
    if (current.rowCount) fail(409, 'period_already_paid');
    const document = await save(client, shop.id, user.id, {
      kind: 'expense', contactId: null, amount: String(earnings - deductions), balance: '0', points: '0',
      movements: [], note: 'پرداخت حقوق ' + period,
    });
    const { rows: [result] } = await client.query(
      `INSERT INTO payroll_payments(shop_id,id,employee_id,period,earnings,deductions,document_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING ${payrollColumns}`,
      [shop.id, randomUUID(), employeeId, period, String(earnings), String(deductions), document.id],
    );
    return { ...result, createdAt: result.createdAt.toISOString() };
  });
}

export function reversePayroll(client, shop, user, id, body, key) {
  return idempotent(client, shop.id, key, ['reverse-payroll', user.id, id, body], async () => {
    const { rows: [payment] } = await client.query(
      'SELECT document_id,reversal_id,net FROM payroll_payments WHERE shop_id=$1 AND id=$2', [shop.id, id],
    );
    if (!payment) fail(404, 'payroll_not_found');
    if (payment.reversal_id) fail(409, 'payroll_already_reversed');
    const document = await save(client, shop.id, user.id, {
      kind: 'reversal', contactId: null, amount: payment.net, balance: '0', points: '0', movements: [],
      reversesId: payment.document_id, note: fieldText(body.note, 'note', 1000, true),
    });
    const { rows: [result] } = await client.query(
      `UPDATE payroll_payments SET reversal_id=$3 WHERE shop_id=$1 AND id=$2 RETURNING ${payrollColumns}`,
      [shop.id, id, document.id],
    );
    return { ...result, createdAt: result.createdAt.toISOString() };
  });
}
