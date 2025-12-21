//Checking if a number is greater than another number:

let num1= 5;
let num2= 8;
if(num1>num2){
    console.log("Num1 is greater than Num2");
}
else{
    console.log("Num2 is greater than Num1");
}


//Checking if a string is equal to another string:

let username= "Will";
let anotherUsername= "Willi";
if(username==anotherUsername){
    console.log("pick another username");
}
else{
    console.log("you can pick this");
}


//Checking if a variable is a number or not

let variable= "23";

if(typeof variable==='number'){  // === (3 equals) will compare both value AND type
    // Necessary to use 'number' and not 'Number' as typeof always return lowercase strings
    console.log("variable is a number");
}
else{
    console.log("Variable is not a number");
}


//Checking if a boolean value is true or false:
let isLoggedin= false;
if(isLoggedin){
    console.log("Logged in");
}
else{
    console.log("Logged out");
}


//Checking if array is empty or not:
let items= [] ;
console.log(items.length);
if(items.length==0){
    console.log("Array is empty");
}
else{
    console.log("Array is NOT empty");
}