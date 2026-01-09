//Refee doc:
//https://medium.com/@ignatovich.dm/the-javascript-event-loop-explained-with-examples-d8f7ddf0861d
function sayHello(){
    console.log("I would like to say Hello!");
}

setTimeout(() => {
    sayHello();
}, 0); //Even tho time is set to 0 , still it will be executed after loop cuz it will go to call back register and will be added in task queue and then loaded in call stack , it will take time and until then other console logs will be printed


console.log("ChaiCode");

for (let i = 0; i < 10; i++) {
    console.log(i);
}