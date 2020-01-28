// var name = 'zhangsan';
if(true){
    var name = 'zhangsan';
}
console.log(name);

var a = 100;
function fn(){
    var a = 200;
    console.log('fn:', a);
}
console.log(a); // 100
fn(); // fn:200