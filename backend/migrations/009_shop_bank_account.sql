CREATE TABLE shop_bank_accounts (
  shop_id uuid PRIMARY KEY REFERENCES shops(id),
  holder_name text NOT NULL,
  card_number text CHECK (card_number ~ '^[0-9]{16}$'),
  sheba text CHECK (sheba ~ '^IR[0-9]{24}$'),
  CHECK (card_number IS NOT NULL OR sheba IS NOT NULL)
);
