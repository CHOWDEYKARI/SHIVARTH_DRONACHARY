arr1 = ['Apple', 'Mango', 'Grapes', 'Guava'];
console.log(arr1);

obj1 = {
  name: 'Surya',
  empId: '3469',
  mailId: 'suryamail@gmail.com',
  Address: {
    City: 'Nizamabad',
    District: 'Nizamabad District',
    Pin: 648597,
  },
  Hobbies: ['Badminton', 'E-sports', 'Netflix'],
}
console.log(obj1);

for (x of arr1) {
  console.log(x);
}

for (let key in obj1) {
  console.log(obj1[key]);
}

console.log(arr1[2])

console.log("true")

const map1 = new Map();

map1.set("Hello world!", "Guava");
const arr = [1, 2, 3];
map1.set(arr, {
  type: 'numbers',
  values: arr
});
console.log(map1)