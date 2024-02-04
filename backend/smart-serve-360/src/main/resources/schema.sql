create table ACCOUNT (
  ID uuid not null,
  email varchar(100) not null,
  pw varchar(100) not null,
  account_type varchar(100) not null
);
create table FOOD_ITEM (
  ID uuid not null,
  name varchar(100) not null,
  on_menu boolean not null
);
create table FOOD_ORDER (
  ID uuid not null,
  customer_id uuid not null,
  food_Item_id uuid not null,
  order_Date varchar(100) not null
);