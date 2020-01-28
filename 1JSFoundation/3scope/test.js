console.log(fn);
fn(); // 不会报错
// 函数声明
// 声明的函数会提到前面去
function fn(){
    console.log('rr');
}
console.log(fn1);
// fn1(); // 报错，执行fn1的时候还不是函数
//函数表达式
var fn1 = function(){
    console.log('fn1');
}

console.log(a);
var a = 100;
