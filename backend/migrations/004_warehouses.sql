CREATE TABLE warehouses (
  shop_id uuid NOT NULL REFERENCES shops(id),
  id uuid NOT NULL,
  name text NOT NULL,
  PRIMARY KEY (shop_id, id),
  UNIQUE (shop_id, name)
);
INSERT INTO warehouses(shop_id,id,name) SELECT id,id,'انبار اصلی' FROM shops;

CREATE TABLE warehouse_stock (
  shop_id uuid NOT NULL,
  warehouse_id uuid NOT NULL,
  product_id uuid NOT NULL,
  stock numeric(18,3) NOT NULL CHECK (stock >= 0),
  PRIMARY KEY (shop_id, warehouse_id, product_id),
  FOREIGN KEY (shop_id, warehouse_id) REFERENCES warehouses(shop_id, id),
  FOREIGN KEY (shop_id, product_id) REFERENCES products(shop_id, id)
);
INSERT INTO warehouse_stock(shop_id,warehouse_id,product_id,stock)
  SELECT shop_id,shop_id,id,stock FROM products WHERE stock <> 0;

ALTER TABLE stock_movements ADD COLUMN warehouse_id uuid;
UPDATE stock_movements SET warehouse_id=shop_id;
ALTER TABLE stock_movements ALTER COLUMN warehouse_id SET NOT NULL;
ALTER TABLE stock_movements ADD FOREIGN KEY (shop_id, warehouse_id) REFERENCES warehouses(shop_id, id);
ALTER TABLE stock_movements DROP CONSTRAINT stock_movements_pkey;
ALTER TABLE stock_movements ADD PRIMARY KEY (shop_id, document_id, product_id, warehouse_id);

ALTER TABLE documents DROP CONSTRAINT documents_kind_check;
ALTER TABLE documents ADD CONSTRAINT documents_kind_check
  CHECK (kind IN ('purchase', 'sale', 'receipt', 'payment', 'expense', 'adjustment', 'redemption', 'reversal', 'sale-return', 'purchase-return', 'transfer'));
