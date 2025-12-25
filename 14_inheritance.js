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

