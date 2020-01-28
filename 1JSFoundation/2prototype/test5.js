const a = [];
console.log(a instanceof Array);

function Animal(){
    this.eat = function(){
        console.log('animal eat');
    }
}

function Dog(){
    this.bark = function(){
        console.log('dog bark');
    }
}
Dog.prototype = new Animal();

const hashqi = new Dog();



