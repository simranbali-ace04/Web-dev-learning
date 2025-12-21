//Challenge 1:
let teaFlavors= ["green tea","black tea", "oolong tea"];

const firstTea= teaFlavors[0]; //To store any variable , best is to use 'const' instead of 'let'

console.log(firstTea);


//Challenge 2:
let cities= ["London", "Tokyo", "Paris", "New York"];

const favoriteCity= cities[2];

console.log(favoriteCity)

//Challenge 3:
let teaTypes= ["herbal tea", "white tea", "masala chai"];

console.log(teaTypes[1]);

teaTypes[1]= "jasmine tea";

console.log(teaTypes[1]);

//Challenges 4:
let citiesVisited= ["Mumbai", "Sydney"];
console.log(citiesVisited);
//citiesVisited[2]= "Berlin";  //feasible only when length is known , not a good one as can mess up during database 

//Adding an element using 'push' method
citiesVisited.push("Berlin");
console.log(citiesVisited);


//Challenge 5:
let teaOrders= ["chai", "iced tea", "matcha", "earl grey"];

console.log(teaOrders);
const lastOrder= teaOrders.pop();
console.log(lastOrder);
console.log(teaOrders);

//Challenge 6:
let popularTeas= ["green tea", "oolong tea", "chai"];
console.log(popularTeas);
let softCopyTeas= popularTeas; //A soft copy of an array reflects all the changes made in the original array , as copy and og arrays points to the same memory
console.log(softCopyTeas);

popularTeas.pop();
console.log(popularTeas);
console.log(softCopyTeas);


//Challenge 7:
let topCities= ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];  // Hard copy is its individual
console.log(topCities);
console.log(hardCopyCities);
topCities.pop();
console.log(hardCopyCities);
console.log(topCities);


//Challenge 8:
let europeanCities= ["Paris", "Rome"];
let asianCities= ["Tokyo", "Bangkok"];
//let worldCities= europeanCities + asianCities; 
//console.log(typeof worldCities); //On doing the above method, it will add them as a string , that's why return type is String

let worldCities= europeanCities.concat(asianCities); // concat= combine/ merge two arrays in a new array
console.log(worldCities);


//Challenge 9:
let teaMenu= ["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength= teaMenu.length;
console.log(menuLength);

//Challenge 10:
let cityBucketList= ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList= cityBucketList.includes("London"); //Strict to uppercase and lowecase
console.log(isLondonInList);