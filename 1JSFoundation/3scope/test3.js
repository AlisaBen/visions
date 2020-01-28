function fn(name,age){
    console.log(name, age); //zhangsan 20
    console.log(this); // {x: 100}
}
fn.call({x:100},'zhangsan',20);
var fn1 = function(name,age){
    console.log(name, age); //zhangsan 20
    console.log(this); // {x: 100}
}.bind({x:1001});
fn1('zhangsanpppppp', 200);