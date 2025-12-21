//Challenge 1:
let sum=0;
let i=1;
while(i<=5){
    sum+=i;
    i++;
}
console.log(sum);

//Challenge 2:
let countdown= [];
let j=5;
while(j>=1){
    countdown.push(j);
    j--;
}
console.log(countdown);


//Challenge 3:
// let teaCollection= [];
// let tea;
// do{
//     //tea = prompt(`Enter your favourite tea(type 'stop' to finish)`);
//     // prompt is not supported by node.js , so use browser to run this js code
//     if(tea!=="stop"){
//         teaCollection.push(tea);
//     }
// }while(tea!=="stop");

// console.log(teaCollection);


//Challenge 4:
let numbers= [2,4,6];
let multipliedNumbers= [];

for (let i=0; i<numbers.length; i++) {
    // takeNumber= numbers[i]*2;
    // multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(numbers[i]*2);
}
console.log(multipliedNumbers);


//Challenge 5:
let cities= ["Paris", "New York", "Tokyo", "London"];
let cityList= [];

for(let i=0; i<cities.length; i++){
    cityList.push(cities[i]);
}

console.log(cityList);