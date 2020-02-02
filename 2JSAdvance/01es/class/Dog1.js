function Animal(name) {
	this.name = name;
	this.eat= function() {
	console.log('eat');
}
	
}
// Animal.prototype.eat = function() {
// 	console.log('eat');
// }

function Dog(name) {
	this.name = name;
	this.bark = function() {
	console.log('bark');
}
}
// Dog.prototype.bark = function() {
// 	console.log('bark');
// }
Dog.prototype = new Animal(this.name);

var dog = new Dog("hashqi");
// var i;
// for(i in dog){
// 	if(typeof dog[i] === 'function'){
// 		console.log('func');
// 		dog[i]();
// 	}
// 	console.log(dog[i]);
// }
dog.eat();
dog.bark();