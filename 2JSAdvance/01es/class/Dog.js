class Animal {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log('eat');

	}
}
class Dog extends Animal{
	constructor(name){
		super(name);
		this.name = name;
	}
	say() {
		console.log('say');
	}
}
const dog = new Dog('hashqi');
dog.eat();
dog.say();
console.log(Dog.prototype.constructor); //[Function: Dog]
console.log(Dog.prototype); //Dog {}
console.log(Dog.__proto__); //[Function: Animal]
console.log(dog.__proto__ === Dog.prototype) // true