function Foo(name){
    this.name = name;
}
const f = new Foo('zhangsan');
console.log(f instanceof Foo); // true
