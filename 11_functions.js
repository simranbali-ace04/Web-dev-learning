//Challenge 1:
function makeTea(typeOfTea){
    return `making ${typeOfTea}`;

}

let teaOrder= makeTea("masala chai");
// console.log(tea);


//Challenge 2:
function orderTea(teaType){

    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

// The orderTea will be called, loaded up and it will create an execution context and then 
// when orderTea will call confirmOrder then it will also be loaded within 
// orderTea which create its own execution context and when it returns the relevant 
// things, it will unload it all and everything one by one in reverse and we will
// get our output


//Challenge 3: Arrow function
//Arrow function doesn't have enough reliability 
const calculateTotal = (price, quantity) => {
    return (price* quantity) ;
}

let totalCost = calculateTotal(200, 12);
console.log(`The total cost is ${totalCost}`);


//Challenge 4: High order function 
//A high order function is the one where a function can take another function as an arguement and return it too 

function processTeaOrder(teaFun){
    return teaFun('earl grey');
}
function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}` ;
}

let order= processTeaOrder(makeTea);
console.log(order);


//Challenge 5: Closure
//A closure is when a nested function remembers variables from its outer function 
//even after the outer function has finished executing.
function createTeaMaker(TeaType){
    return function newfunc(TeaType){
        return `Making ${TeaType}`;
    }
}

let teaMakerfunc= createTeaMaker();
console.log(teaMakerfunc("green tea"));