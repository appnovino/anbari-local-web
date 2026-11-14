export class ApiError extends Error {
  constructor(status, code) {
    super(code);
    this.status = status;
  }
}

export function fail(status, code) {
  throw new ApiError(status, code);
}

export function fieldText(value, field, max, optional = false) {
  if (optional && (value == null || value === '')) return null;
  if (typeof value !== 'string' || !value.trim() || value.length > max || value.includes('\0')) {
    fail(400, 'invalid_' + field);
  }
  return value.trim();
}

export function identifier(value) {
  if (typeof value !== 'string' || !/^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(value)) {
    fail(400, 'invalid_id');
  }
  return value.toLowerCase();
}

export function integer(value, field, { zero = false, max = 1_000_000_000_000 } = {}) {
  if (!Number.isSafeInteger(value) || value < (zero ? 0 : 1) || value > max) fail(400, 'invalid_' + field);
  return BigInt(value);
}

export function emailAddress(value) {
  const email = fieldText(value, 'email', 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fail(400, 'invalid_email');
  return email;
}

export function quantityMillis(value, signed = false) {
  const text = String(value);
  if (!['string', 'number'].includes(typeof value) || !/^-?\d{1,9}(?:\.\d{1,3})?$/.test(text)) {
    fail(400, 'invalid_quantity');
  }
  const negative = text.startsWith('-');
  const [whole, fraction = ''] = text.replace(/^-/, '').split('.');
  const quantity = BigInt(whole) * 1000n + BigInt(fraction.padEnd(3, '0'));
  if (!quantity || (negative && !signed)) fail(400, 'invalid_quantity');
  return negative ? -quantity : quantity;
}

export function decimalQuantity(value) {
  const sign = value < 0n ? '-' : '';
  const absolute = value < 0n ? -value : value;
  return sign + absolute / 1000n + '.' + String(absolute % 1000n).padStart(3, '0');
}
