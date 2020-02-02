function MathHandle(x,y) {
	this.x = x;
	this.y = y;
}
MathHandle.prototype.add = function() {
	return this.x + this.y;
}

var math = new MathHandle(1,2);
console.log(math.add());