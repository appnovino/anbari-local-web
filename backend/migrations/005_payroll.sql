CREATE TABLE employees (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  name text NOT NULL,
  PRIMARY KEY (shop_id,id)
);

CREATE TABLE payroll_payments (
  shop_id uuid NOT NULL,
  id uuid NOT NULL,
  employee_id uuid NOT NULL,
  period text NOT NULL CHECK (period ~ '^[0-9]{4}-(0[1-9]|1[0-2])$'),
  earnings numeric(20,0) NOT NULL CHECK (earnings > 0),
  deductions numeric(20,0) NOT NULL CHECK (deductions >= 0 AND deductions < earnings),
  net numeric(20,0) GENERATED ALWAYS AS (earnings-deductions) STORED,
  document_id uuid NOT NULL,
  reversal_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (shop_id,id),
  FOREIGN KEY (shop_id,employee_id) REFERENCES employees(shop_id,id),
  FOREIGN KEY (shop_id,document_id) REFERENCES documents(shop_id,id),
  FOREIGN KEY (shop_id,reversal_id) REFERENCES documents(shop_id,id),
  UNIQUE (shop_id,document_id),
  UNIQUE (shop_id,reversal_id)
);
CREATE UNIQUE INDEX payroll_one_active_period ON payroll_payments(shop_id,employee_id,period) WHERE reversal_id IS NULL;
