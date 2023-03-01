// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*OPERATORI MATEMATICI*/

//z = x +y;
var z, x, y;

x = 10;
y = 20;
z = x + y;
//console.log(z);
z = 10 + 10;
//console.log(z);

y = 12.5;
z = x + y;
//console.log(z);
z = x * y;
//console.log(z);

z = x / y;
//console.log(z);

z = 100 % 20;

//console.log(z);
z = 100 % 22;

//console.log(z);

/*OPERATORI COMPOSTI - assegnare operazione a una variabile*/

var x = 0,
  y = 10;
x = x + 1;
console.log(x);

x += 10;
console.log(x);

x -= y;
console.log(x);

x *= 15;
console.log(x);

x /= 5;
console.log(x);

x %= 2;
console.log(x);

/*OPERATORI UNARI operazioni su un solo operando*/
var num = '10';
console.log(num + ' è una ' + typeof num);
// cust della stringa a numero
num = +num;
console.log(num + ' è una ' + typeof num);
var num2 = +'10';
console.log(num2 + ' è una ' + typeof num2);

/*var anni = prompt('Quanti anni hai?');
anni = parseInt(anni)
anni = +anni;

console.log(anni +' è un '+typeof(anni));
*/
var totale = 100 - 20;
console.log(totale);
