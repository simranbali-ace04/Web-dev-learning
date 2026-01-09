/**A closure is when a function remembers variables from where it was created,
even after that outer function has finished running.**/

function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}

let increament = outer();

console.log(increament());
console.log(increament());
console.log(increament());