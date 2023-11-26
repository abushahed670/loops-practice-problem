var fruits = ['apple', 'banana', 'orange'];
var bananaIndex = fruits.indexOf('banana');
// console.log(bananaIndex);
// fruits[1] = 'mango'; ---//fruits[bananaIndex] = 'mango'; same ashbe result
fruits[bananaIndex] = 'mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);