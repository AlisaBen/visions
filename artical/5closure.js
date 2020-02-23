function closure() {
    var a = 1;
    return function() {
        console.log(a);
    }
}
var closure = closure();
closure(); // 1

function f1() {
    var n = 10;
    nAdd = function() { 
        n += 1;
        console.log(n);
    }; // 变量提升,也是一个闭包
    return function f2() { console.log(n) };
}
var result = f1();
result(); // 10
nAdd(); // 11
result(); // 11
result = null;
nAdd(); // 12


function Fun() {
    var name = 'tom';
    this.age = 21;
    this.getName = function() {
        return name;
    }
}
var fun = new Fun();
console.log(fun.name, fun.age); // undefined, 21
console.log(fun.getName()); // tom
// console.log(fun);

function fun1(x) {
    var age = x;
    return function(){ console.log(age) };
}
var getAge = fun1(200); // 闭包
setTimeout(getAge, 1000); //200 避免在setTimeout的时候传入变量，避免全局变量



var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function() {
        return function() {
            return this.name;
        }
    }
};
console.log(object.getNameFunc()());

var name1 = "The Window";
var object1 = {
    name1: "My Object",
    getNameFunc: function() {
        var that = this;
        console.log(that);
        return function() {
            return this.name1;
        }
    }
};
console.log(object1.getNameFunc()());

