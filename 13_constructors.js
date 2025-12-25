function Person(name, age){
    this.name = name ;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}` ;
    }
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea); 
//To access the functions , we have to explicitly mention it 
console.log(lemonTea.describe());


function Animal(species){
    this.species = species;
}

// Prototype function could be created in the constructor too but not an efficient task cuz everytime a new object is created , a whole new function will be created
// Instead , it is better to create a shared function that is craeted once and can be used by each object when wanted , only object name is updated
// Defining prototype function outside the constructor, 
// saves memory
// keeps code clean
// matches real OOP behavior
// practically best practice is creating class function just sound() inside the constructor over the prototype function outside the constructor
//Internally , class function sound() will work same as prototype one , cuz js is object-based and not class-based prototype


Animal.prototype.sound = function(){
    return `${this.species} makes a sound` ;
}

let dog = new Animal("dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());


function Drink(name){
    this.name= name;
    if(!new.target){
        throw new Error("Drink  must be called with 'new' keyword");
    }
}

let tea = new Drink("tea");
let coffee = Drink("coffee");