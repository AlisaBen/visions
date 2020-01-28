var a = {
    name: 'A',
    fn: function(){
        console.log(this.name);
    }
}
a.fn(); // A
a.fn.call({name:'B'}); // B
var fn1 = a.fn;
fn1(); // undefined