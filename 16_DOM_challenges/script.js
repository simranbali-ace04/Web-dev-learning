//example 1

// let hold = document.getElementById("changeTextButton");
// console.log(hold); //Practice to check if the event is grabbed

//First you select the actor,then define the event,then write the reaction,and inside that reaction you select and change the target.
document.getElementById("changeTextButton").addEventListener("click", function(){

    let paragraph =  document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
});


//example 2
document.getElementById("highlightFirstCity").addEventListener("click", function(){
   let citiesList = document.getElementById("citiesList");
   citiesList.firstElementChild.classList.add("highlight");
});

//example 3
document.getElementById("changeOrder").addEventListener("click", function(){
    let coffee = document.getElementById("coffeeType")
    coffee.textContent = "Espresso";    
    coffee.style.backgroundColor= "yellowgreen";
    coffee.style.color= "black";
    coffee.style.padding= "5px" ;

});

//example 4
document.getElementById("addNewItem").addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Cereal";
    document.getElementById("shoppingList").appendChild(newItem);

    //To remove
    // let list = document.getElementById("shoppingList");
    // let itemToRemove = list.firstElementChild;
    // list.removeChild(itemToRemove); 
});


//example 5
document.getElementById("removeLastTask").addEventListener("click", function(){
    let taskList = document.getElementById("taskList");
    // let itemToRemove = taskList.lastElementChild;
    // taskList.removeChild(itemToRemove);
    taskList.lastElementChild.remove();
});