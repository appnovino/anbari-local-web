ALTER TABLE users ADD COLUMN phone text UNIQUE;
CREATE INDEX sessions_expiry ON sessions(expires_at);
CREATE INDEX products_page ON products(shop_id,name,id);
CREATE INDEX contacts_page ON contacts(shop_id,name,id);

CREATE TABLE service_limits (
  scope text NOT NULL,
  subject text NOT NULL,
  bucket bigint NOT NULL,
  expires_at timestamptz NOT NULL,
  uses integer NOT NULL DEFAULT 1,
  PRIMARY KEY(scope,subject,bucket)
);
CREATE INDEX service_limits_expiry ON service_limits(expires_at);

CREATE TABLE sms_challenges (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  phone text NOT NULL,
  purpose text NOT NULL CHECK (purpose IN ('link','login')),
  proof bytea NOT NULL,
  attempts integer NOT NULL DEFAULT 0,
  expires_at timestamptz NOT NULL,
  consumed boolean NOT NULL DEFAULT false
);
CREATE INDEX sms_challenges_expiry ON sms_challenges(expires_at);

CREATE TABLE subscription_payments (
  id uuid PRIMARY KEY,
  shop_id uuid NOT NULL REFERENCES shops(id),
  user_id uuid NOT NULL REFERENCES users(id),
  operation_key text NOT NULL,
  amount_rial bigint NOT NULL CHECK (amount_rial > 1000),
  duration_days integer NOT NULL CHECK (duration_days BETWEEN 1 AND 365),
  status text NOT NULL CHECK (status IN ('creating','pending','paid','failed','review')),
  track_id text UNIQUE,
  bank_reference text UNIQUE,
  next_check_at timestamptz,
  checks integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  paid_at timestamptz,
  UNIQUE(shop_id,operation_key)
);
CREATE INDEX subscription_payments_due ON subscription_payments(next_check_at,id) WHERE status='pending';
CREATE INDEX subscription_payments_creating ON subscription_payments(created_at) WHERE status='creating';
CREATE INDEX subscription_payments_shop ON subscription_payments(shop_id,created_at DESC);
CREATE TABLE shop_subscriptions (
  shop_id uuid PRIMARY KEY REFERENCES shops(id),
  expires_at timestamptz NOT NULL
);
