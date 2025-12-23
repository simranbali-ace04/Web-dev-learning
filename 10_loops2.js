//Challenge 1:
let teas= ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas= [];

for(let i=0; i<teas.length; i++){
    if(teas[i]=="chai"){
        break;
    }
        selectedTeas.push(teas[i]);
}
console.log(selectedTeas);


//Challenge 2:
let cities= ["London", "New York", "Paris", "Berlin"];
let visitedCities= [];

for(let i=0; i<cities.length; i++){
    if(cities[i]=="Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}
console.log(visitedCities);

//Challenge 3:
let numbers= [1,2,3,4,5];
let smallNumbers= [];

for (const num of numbers) {
    if(num==4){
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);

//Challenge 4:
let teas_ch4= ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas= [];

for (const tea of teas_ch4) {
    if(tea=="herbal tea"){
        continue;
    }
    preferredTeas.push(tea);
}
console.log(preferredTeas);


//Challenge 5:
let citiesPopulation= {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
let cityNewPopulation= {};

for (const city in citiesPopulation) {
    if(city=="Berlin"){
        break;
    }
    cityNewPopulation[city]= citiesPopulation[city];
}
console.log(cityNewPopulation);


//Challenge 6:
let worldCities= {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities= {};

for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue;
    }
    largeCities[city]= worldCities[city];
}
console.log(largeCities);

//Challenge 7:
let teaTypes= ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas= [];

teaTypes.forEach(tea => {
    if(tea=="chai"){
        return;
    }
    availableTeas.push(tea);
});
console.log(availableTeas);


//Challenge 8:
let allCities= ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities= [];

allCities.forEach(city => {
    if(city=="Sydney"){
        return;
    }
    traveledCities.push(city);
});
console.log(traveledCities);


//Challenge 9:
let Numbers= [2,5,7,9];
let doubledNumbers= [];

for(let i=0; i<Numbers.length; i++){
    if(Numbers[i]==7){
        continue;
    }
    doubledNumbers.push(Numbers[i]*2);
}
console.log(doubledNumbers);


//Challenge 10:
let manyTeas= ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas= [];

for (const tea of manyTeas) {
    if(tea.length> 10){
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);
