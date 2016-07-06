'use strict';

let evens = [1, 2, 3, 4];
let squared = evens.map(v => v * v);
console.log(squared); //-> [ 1, 4, 9, 16 ]

var square = a => a * a;
console.log(square(7));

var b = 3;
() => {b += 5};

console.log(b);
