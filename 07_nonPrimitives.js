//Objects 

let username= {
    firstname: "William",
    isLoggedin: true,
    'login id': 24013017 , //the spaced var name in obj are enclosed in the quotes
};

//const variable and const object has the difference in their memory , const var will save the memory for that specific value,
//whereas const obj will save the memory for the object , not the value 



console.log(username);

username.firstname= "Mr. Will";
username.lastname= "Traynor"; //even a new property can be added to the object

console.log(username['login id']); //the spaced obj property is accessed using square braces only, not the dot
console.log(username);
console.log(username.lastname); //obj property can be accessed using the dot and square braces both 
console.log(username.firstname);

console.log(typeof username);

let today= new Date(); //built in objects
console.log(today.getDay()); //will print 6 cuz it is Saturday 


//Array

let anotherUser= [true,"William"];
console.log(anotherUser[0]); 

let isValue= true;
console.log(isValue+"1"); //implicit conversion is not a trusthworthy thing

let aValue= "2abc";
console.log(Number(aValue)); // NaN: not a number
console.log(typeof Number(aValue));