/*闭包 */
function fn1(){
    var a = 100;
    return function(){
        console.log(a);
    }
}
var f1 = fn1();
var a = 200;
f1(); // 100

var b = 500;
var fn = function(){
    console.log(b);
}
function fn2(fn){
    var b = 300;
    fn();
}
fn2(fn); // 500