// fn('zhangsan');
// function fn(name){
//     age = 20;
//     console.log(name + age + ' [fn]'); // zhangsan20 [fn]
// }
// console.log(age); // 20

fn('zhangsan');
function fn(name){
    age = 20;
    console.log(name + age + ' [fn]'); // zhangsan20 [fn]
    var age;
}
console.log(age); // 20
