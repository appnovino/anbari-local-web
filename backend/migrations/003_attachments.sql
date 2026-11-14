CREATE TABLE attachments (
  shop_id uuid NOT NULL,
  document_id uuid NOT NULL,
  id uuid NOT NULL,
  name text NOT NULL,
  media_type text NOT NULL CHECK (media_type IN ('image/png','image/jpeg','application/pdf')),
  content bytea NOT NULL CHECK (octet_length(content) BETWEEN 1 AND 2097152),
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (shop_id, document_id, id),
  FOREIGN KEY (shop_id, document_id) REFERENCES documents(shop_id, id)
);
