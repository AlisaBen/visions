// 正则表达式
//s字符串
function isNumeric(s)
{
    // write code here
    return !isNaN(Number(s))
}
// console.log(Number('12'))
// console.log(Number('+100'))
// console.log(Number('-100'))
// console.log(Number('5e2'))
// console.log(Number('5e-2'))
// console.log(Number('1.2.3'))

// console.log(Number.isNaN(Number('1.2.3')))
console.log(isNumeric('-1E-16'))

console.log(isNumeric('12e'))
console.log(isNumeric('1a3.14'))
console.log(isNumeric('11.2.3'))
console.log(isNumeric('+-5'))
console.log(isNumeric('12e+4.3'))