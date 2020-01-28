function Elem (id) {
    this.elem = document.getElementById(id);

    console.log(this.elem);
}
Elem.prototype.html = function(val) {
    console.log('html');
    const elem = this.elem;
    console.log(elem);
    if (val) {
        elem.innerHTML = val;
        return this; // 链式操作
    } else {
        return elem.innerHTML;
    }
}
Elem.prototype.on = function (type, fn) {
    const elem = this.elem;
    console.log(elem);
    elem.addEventListener(type,fn);
}
const div1 = new Elem('left-container');
console.log(div1.html());

// div1.html('<p>hello world</p>')
// console.log(div1.html());

div1.on('click', () => {
    alert('hello world');
})