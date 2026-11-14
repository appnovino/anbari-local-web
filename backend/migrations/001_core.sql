CREATE TABLE users (
  id uuid PRIMARY KEY,
  email text NOT NULL UNIQUE,
  name text NOT NULL,
  password_hash text NOT NULL
);

CREATE TABLE sessions (
  token_hash text PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX sessions_user ON sessions(user_id);

CREATE TABLE shops (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  revision bigint NOT NULL DEFAULT 0,
  points_per_sale bigint NOT NULL DEFAULT 1 CHECK (points_per_sale BETWEEN 0 AND 1000000),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE memberships (
  shop_id uuid NOT NULL REFERENCES shops(id),
  user_id uuid NOT NULL REFERENCES users(id),
  role text NOT NULL CHECK (role IN ('owner', 'staff', 'viewer')),
  PRIMARY KEY (shop_id, user_id)
);
CREATE INDEX memberships_user ON memberships(user_id);

CREATE TABLE products (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  name text NOT NULL,
  sku text,
  stock numeric(18,3) NOT NULL DEFAULT 0 CHECK (stock >= 0),
  version bigint NOT NULL DEFAULT 1,
  PRIMARY KEY (shop_id, id),
  UNIQUE (shop_id, sku)
);

CREATE TABLE contacts (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  name text NOT NULL,
  phone text,
  balance numeric(30,0) NOT NULL DEFAULT 0,
  points bigint NOT NULL DEFAULT 0 CHECK (points >= 0),
  version bigint NOT NULL DEFAULT 1,
  PRIMARY KEY (shop_id, id)
);

CREATE TABLE documents (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  kind text NOT NULL CHECK (kind IN ('purchase', 'sale', 'receipt', 'payment', 'expense', 'adjustment', 'redemption', 'reversal')),
  contact_id uuid,
  amount numeric(30,0) NOT NULL CHECK (amount >= 0),
  balance_delta numeric(30,0) NOT NULL DEFAULT 0,
  point_delta bigint NOT NULL DEFAULT 0,
  reverses_id uuid,
  note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  actor_id uuid NOT NULL REFERENCES users(id),
  PRIMARY KEY (shop_id, id),
  FOREIGN KEY (shop_id, contact_id) REFERENCES contacts(shop_id, id),
  FOREIGN KEY (shop_id, reverses_id) REFERENCES documents(shop_id, id),
  UNIQUE (shop_id, reverses_id),
  CHECK ((kind = 'reversal') = (reverses_id IS NOT NULL))
);
CREATE INDEX documents_feed ON documents(shop_id, created_at DESC, id DESC);
CREATE INDEX documents_contact ON documents(shop_id, contact_id, created_at DESC, id DESC);

CREATE TABLE stock_movements (
  shop_id uuid NOT NULL,
  document_id uuid NOT NULL,
  product_id uuid NOT NULL,
  quantity_delta numeric(18,3) NOT NULL CHECK (quantity_delta <> 0),
  unit_price numeric(20,0) NOT NULL CHECK (unit_price >= 0),
  PRIMARY KEY (shop_id, document_id, product_id),
  FOREIGN KEY (shop_id, document_id) REFERENCES documents(shop_id, id),
  FOREIGN KEY (shop_id, product_id) REFERENCES products(shop_id, id)
);
CREATE INDEX stock_movements_product ON stock_movements(shop_id, product_id);

CREATE TABLE operation_receipts (
  shop_id uuid NOT NULL REFERENCES shops(id),
  operation_key text NOT NULL,
  request_hash text NOT NULL,
  response jsonb NOT NULL,
  PRIMARY KEY (shop_id, operation_key)
);
