function Foo(name){
    this.name = name;
}
Foo.prototype.alertName = function(){
    console.log(this.name + ' [alert]');
}

const f = new Foo('zhangsan');
f.printName = function(){
    console.log(this.name + ' [print]');
}
f.printName();
f.alertName();
