LOCK TABLE documents IN SHARE ROW EXCLUSIVE MODE;

CREATE TABLE shop_report_totals (
  shop_id uuid NOT NULL REFERENCES shops(id),
  kind text NOT NULL,
  amount numeric NOT NULL,
  PRIMARY KEY(shop_id,kind)
);

INSERT INTO shop_report_totals(shop_id,kind,amount)
SELECT d.shop_id,coalesce(original.kind,d.kind),
       sum(CASE WHEN original.id IS NULL THEN d.amount ELSE -d.amount END)
FROM documents d
LEFT JOIN documents original ON original.shop_id=d.shop_id AND original.id=d.reverses_id
GROUP BY d.shop_id,coalesce(original.kind,d.kind);

CREATE FUNCTION novino_post_report_total() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE
  report_kind text := NEW.kind;
  delta numeric := NEW.amount;
BEGIN
  IF NEW.reverses_id IS NOT NULL THEN
    SELECT kind INTO STRICT report_kind FROM documents WHERE shop_id=NEW.shop_id AND id=NEW.reverses_id;
    delta := -delta;
  END IF;
  IF delta <> 0 THEN
    INSERT INTO shop_report_totals(shop_id,kind,amount) VALUES (NEW.shop_id,report_kind,delta)
    ON CONFLICT (shop_id,kind) DO UPDATE SET amount=shop_report_totals.amount+excluded.amount;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER documents_report_total AFTER INSERT ON documents
FOR EACH ROW EXECUTE FUNCTION novino_post_report_total();
