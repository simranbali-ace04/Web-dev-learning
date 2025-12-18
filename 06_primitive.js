//            Data Types 
//       i) primitive              ii) non-primitive
// string, boolean, number,            iia) Objects
// null, undefined, symbol             iib) Array, functions, objects

//Number

let balance= 120;
console.log(balance);

let anotherBalance= new Number(120);
console.log(anotherBalance);

console.log(typeof balance); //to know the data type of data
console.log(typeof anotherBalance); 

//Even tho both are storing the number , still balace is a number and anotherBalance is a object.
//That's why, everything is an object in javascript.


// null and undefined
//null means that it is empty and is done intentionally by the developer , undefined means a variable is declared but hasn't assigned a value yet (set by js engine)

let firstname;
let lastname= null;
console.log(firstname);
console.log(lastname);


//String

let myString= "Hello";
let myStringOne= 'Hola';
let username= 'Shiva';

let oldGreet= myString + "World"; // con: Space has to be defined by the developer , either by adding the space or making an empty string
console.log(oldGreet); 

let greetMessage= `Hello ${username} ${myString}`; //even just a string, using back commas ,one can add as much as variables in a single line
console.log(greetMessage);

let demoOne= `Value is ${2*2}`;
console.log(demoOne);

//Symbol = guarantees the uniqueness
let sm1= Symbol();
let sm2= Symbol();
console.log(sm1==sm2);
console.log(sm1);
console.log(sm2);

//even tho the below case is there , it doesn't mean symbols are equal , only name is same not their identity is same
let symbol1= Symbol("button");
let symbol2= Symbol("button");
console.log(symbol1);
console.log(symbol2);
console.log(symbol1==symbol2);
