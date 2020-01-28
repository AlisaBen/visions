const obj = {};
obj.a = 10;
const array = [];
array[0] = 3;
const func = function test(){
    console.log('test');
}
console.log(obj.__proto__); // {}
console.log(array.__proto__); // []
console.log(func.__proto__); // [Function]
console.log(func.prototype);
console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.prototype); //undefined