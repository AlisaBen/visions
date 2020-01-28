console.log(10 + 100); // 110
console.log(10 + '100'); // 10100

/*number类型的10会被转换成string类型的10 */
console.log(10 == '10'); // true
console.log(10 === '10'); // false

console.log(0 == null); // false
/*0和空字符串，undefined都被转换为false */
console.log(0 == ''); // true
console.log(null == undefined); // true

if(12){
    console.log(12); // 12
}
if(null){
    console.log('null');
}
if(0){
    console.log('0');
}
if(''){
    console.log('kong');
}
if('123'){
    console.log('123'); // 123
}
if(undefined){
    console.log('undefined');
}

console.log(10 && 0); // 0
console.log('' || 'abc'); // abc
const a = 100;
console.log(!!a); // true

