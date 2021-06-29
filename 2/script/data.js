var Item = function NewItem (title, price, img) {
   this.title = title;
   this.price = price;
   this.img = img;
}

var item_1 = new Item ('Шуруповерт DeWALT 1', 1000, 'img/store/155188_2.jpg'),
   item_2 = new Item ('Шуруповерт DeWALT 2', 1500, 'img/store/61e5OvLIlMS._AC_SL1500_.jpg'),
   item_3 = new Item ('Шуруповерт DeWALT 3', 400, 'img/store/f292c5_562555_1.jpg');