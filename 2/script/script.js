var basket = [];
var items = [item_1, item_2, item_3];

var shop = document.querySelector('#shop');
var add = '';

for (var key in items) {
   var div = document.createElement('div');
   div.classList.add('item');
   add = '<img src="' + items[key].img + '">';
   add += '<p>' + items[key].title + '</p>';
   add += '<p>' + items[key].price + ' &#8381;</p>';
   add += '<button>Добавить в корзину</button>';
   div.innerHTML = add;

   shop.append(div);
}

var sum = 0;
var sumAdd = document.querySelector('#sum');

var buttons = document.querySelectorAll('button');
// console.log(buttons);
for (var j = 0; j < items.length; j++) {
   buttons[j].id = 'b' + j;
   buttons[j].onclick = function (e) {
      var good = items[e.target.id[1]];
      sum = 0;
      if (basket.indexOf(good) === -1) {
         basket.push(good);
         good.count = 1;
      }
      else {
         good.count++;
      }
      console.log(basket);
      console.log(good.count);

      var check = document.querySelector('#basket');
      var itemBasket = '';
      check.innerHTML = '';

      for (var i in basket) {
         var div = document.createElement('div');
         itemBasket = '<p>' + basket[i].title + '</p>';
         itemBasket += '<p>' + basket[i].price + ' &#8381;</p>';
         itemBasket += '<img src="' + basket[i].img + '">';
         itemBasket += '<p>Количество: ' + basket[i].count + '</p>';
         div.classList.add('item');

         div.innerHTML = itemBasket;
         check.append(div);
      }

      for (var k in basket) {
         sumAdd.innerHTML = '';
         sum += basket[k].price * basket[k].count;
         sumAdd.append(document.createTextNode(`Итого: ${sum} рублей`));
         sumAdd.classList.add('total');
      }
   }
}