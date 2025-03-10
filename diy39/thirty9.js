// set() & get()

const fruits = new Map();
fruits.set('mangoes',87);
fruits.set('kiwi',80);
fruits.set('apple',77);
fruits.set('watermelon',67);

var value = fruits.get('kiwi');
var value1 = fruits.get('apple');
console.log(value ,value1);

// clear() & delete()

fruits.delete('kiwi');
console.log(fruits);

//fruits.clear();
//console.log(fruits);

//values() & keys()

console.log(fruits.values());
console.log(fruits.keys());

//has() & entries()

console.log(fruits.has('apple'));
console.log(fruits.entries('mangoes'));