let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start()); //This an object 


class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `${this.model} is a car of ${this.make}`;
    }
}

 //Inheritance
class Car extends Vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehicle1 = new Vehicle("Porsche", "GTR3");

console.log(vehicle1.make);

//Encapsulation

class bankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new bankAccount();
console.log(account.getBalance());


//Abstraction

class coffeeMachine{
    start(){
        //call DB
        //filter value
        return `Starting the machine...`;
    }
    brewCoffee(){
        //complex calculations
        return `Brewing coffee`;
    }

    pressStartButton(){
        let msg1= this.start();
        let msg2 =this.brewCoffee();
        return `${msg1} + ${msg2}`;
    }
}

let myMachine = new coffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());
