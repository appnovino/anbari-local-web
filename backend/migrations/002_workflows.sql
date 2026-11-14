ALTER TABLE documents ADD COLUMN return_of_id uuid;
ALTER TABLE documents ADD CONSTRAINT documents_return_parent
  FOREIGN KEY (shop_id, return_of_id) REFERENCES documents(shop_id, id);
ALTER TABLE documents DROP CONSTRAINT documents_kind_check;
ALTER TABLE documents ADD CONSTRAINT documents_kind_check
  CHECK (kind IN ('purchase', 'sale', 'receipt', 'payment', 'expense', 'adjustment', 'redemption', 'reversal', 'sale-return', 'purchase-return'));
ALTER TABLE documents ADD CONSTRAINT documents_return_kind
  CHECK ((kind IN ('sale-return', 'purchase-return')) = (return_of_id IS NOT NULL));
CREATE INDEX documents_returns ON documents(shop_id, return_of_id) WHERE return_of_id IS NOT NULL;

CREATE TABLE cheques (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  contact_id uuid NOT NULL,
  number text NOT NULL,
  amount numeric(20,0) NOT NULL CHECK (amount > 0),
  direction text NOT NULL CHECK (direction IN ('incoming','outgoing')),
  due_on date NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','cleared','bounced','cancelled')),
  document_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (shop_id, id),
  FOREIGN KEY (shop_id, contact_id) REFERENCES contacts(shop_id, id),
  FOREIGN KEY (shop_id, document_id) REFERENCES documents(shop_id, id),
  UNIQUE (shop_id, direction, number),
  CHECK ((status = 'cleared') = (document_id IS NOT NULL))
);
CREATE INDEX cheques_due ON cheques(shop_id, due_on, id);

CREATE TABLE tasks (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  kind text NOT NULL CHECK (kind IN ('reminders','shopping-list')),
  title text NOT NULL,
  due_at timestamptz,
  quantity numeric(18,3),
  done boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (shop_id, id),
  CHECK ((kind = 'reminders') = (due_at IS NOT NULL)),
  CHECK ((kind = 'shopping-list') = (quantity IS NOT NULL))
);
CREATE INDEX tasks_kind ON tasks(shop_id, kind, created_at DESC, id DESC);
