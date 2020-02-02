class MathHandle {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	add() {
		return this.x + this.y;
	}
}
const m = new MathHandle(1,2);
console.log(m.add());
console.log(MathHandle.prototype.constructor === MathHandle); // true显示原型等于构造函数本身
console.log(typeof MathHandle); // function
console.log(m.__proto__ === MathHandle.prototype); // 隐式原型等于显式原型本身
