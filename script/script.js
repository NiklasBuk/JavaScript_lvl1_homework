var chessBoard = document.createElement('table');
var flag = true;

for (var i = 0; i < 8; i++) {
   var tr = document.createElement('tr');
   chessBoard.append(tr);

   for (var j = 0; j < 8; j++) {

      if (j == 0)
      flag = !flag;
      var td = document.createElement('td');
      if (flag && j % 2 == 0) {
         td.style.background = '#cd4b0e';
      }
      else {
         td.style.background = '#f9c2a9';
      }
      if (!flag && j % 2 != 0) {
         td.style.background = '#cd4b0e';
      }
      tr.append(td);
   }
}
document.querySelector('.mainChessBoard').append(chessBoard);

var tdlist = document.querySelectorAll('td');

for (i = 48; i < tdlist.length; i++) {
   tdlist[i].style.color = 'white';
}

var tdArray = Array.from(tdlist);

var result = tdArray.filter(function (elem) {
   
   switch (tdArray.indexOf(elem)) {
      case 0:
      case 7:
      case 56:
      case 63:
         elem.innerHTML = '&#9820;';
         break;
      case 1: 
      case 6: 
      case 57: 
      case 62:
         elem.innerHTML = '&#9822;';
         break;
      case 2: 
      case 5: 
      case 58: 
      case 61:
         elem.innerHTML = '&#9821;';
         break;
      case 4: 
      case 60:
         elem.innerHTML = '&#9819;';
         break;
      case 3: 
      case 59:
         elem.innerHTML = '&#9812;';
         break;
   }
   if (tdArray.indexOf(elem) > 7 && tdArray.indexOf(elem) < 16 || tdArray.indexOf(elem) > 47 && tdArray.indexOf(elem) < 56) {
      elem.innerHTML = '&#9823;'
   }
});

var trlist = document.querySelectorAll('tr');

for (var i = 0, j = 8; i < trlist.length; i++, j--) {
   trlist[i].insertAdjacentHTML('afterBegin', '<td style = "color: #cd4b0e">' + j + '</td>');
}
for (var i = 0; i < 8; i++) {
   trlist[i].insertAdjacentHTML('beforeEnd', '<td style = "color: #cd4b0e; transform: rotate(180deg);">' + (8 - i) + '</td>');
}

chessBoard = document.querySelector('table');
trlist[0].insertAdjacentHTML('beforeBegin', '<tr id = "top-num"></tr>');
trlist[7].insertAdjacentHTML('afterEnd', '<tr id = "bot-num"></tr>');

for (var i = 0, j = 72; i < 8; i++, j--) {
   var td = document.createElement('td');
   td.style.transform = "rotate(180deg)";
   td.innerHTML = String.fromCharCode(j);
   document.querySelector('#top-num').append(td);
}
document.querySelector('#top-num').insertAdjacentHTML('afterBegin', '<td></td>');

for (var i = 0, j = 72; i < 8; i++, j--) {
   var td = document.createElement('td');
   td.innerHTML = String.fromCharCode(j);
   document.querySelector('#bot-num').append(td);
}
document.querySelector('#bot-num').insertAdjacentHTML('afterBegin', '<td></td>');