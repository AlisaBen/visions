var arr = [1,3,5,6,7,9,45,23,67];
var arr1 = [7,8,9];
var arr2 = [1,2,3];
arr.forEach(function(item,index){
    console.log(index,item);
});

console.log('----every-----');
var fun = function (item, index) {
    if (item > 6) return true;
}
console.log(arr.every(fun)); // false
console.log(arr1.every(fun)); // true

console.log('------some------');
console.log(arr.some(fun)); // true
console.log(arr2.some(fun)); // false

console.log('---------filter---------');
var newArr = arr.filter(fun); // [ 7, 9, 45, 23, 67 ]
console.log(newArr);

console.log('---------map---------');
var newArr1 = arr1.map((item) => {
    return `item:${item}`;
})
console.log(newArr1); // [ 'item:7', 'item:8', 'item:9' ]
