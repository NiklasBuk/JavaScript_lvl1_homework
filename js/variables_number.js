var x = +prompt("Задайте целое значение переменной X");
var y = +prompt("Задайте целое значение переменной Y");
x = x + y; y = x - y; x = x - y;
alert("Произвели замену значений заданных переменных.\nПеременная X теперь имеет значение " + x + "\nПеременная Y имеет значение " + y);