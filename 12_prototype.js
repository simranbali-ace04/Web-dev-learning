// Javascript is an object- oriented language, but it is prototype-based , not class-based.
// Prototype is an object which inherits the properties and methods of other objects , when current object fails to use a property or method, prototype object comes in action

let computer = { cpu: 12};
let lenovo = {
    screen: "HD" ,
    __proto__: computer, //To inherit the properties of computer in lenovo
}
let tomHardware = {} ;

//console.log('lenovo ', lenovo.__proto__);

let generiCar = {tyres: 4};
let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, generiCar);

console.log(`tesla: `, tesla); // not a good way 

console.log('tesla ', Object.getPrototypeOf(tesla)); //Here we are acessing the prototype, not the property , that is why we are using getPrototypeOf

console.log(tesla.hasOwnProperty('tyres')); // hasOwnProperty used to check if the certain property is it's own or inherited
console.log(tesla.hasOwnProperty('driver'));

