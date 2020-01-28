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

for(const item in f){
    // console.log(item);
    if(f.hasOwnProperty(item)){
        console.log(item); // name printName
    }
}
