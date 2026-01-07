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


//example 6
//several event handlings are there like mouseover, mouseup, mousedown, mouseout, dblclick, etc
document.getElementById("clickMeButton").addEventListener("keydown", function(){
    alert("chaiCode")
});


//example 7
document.getElementById("teaList").addEventListener("click", function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected: " + event.target.textContent);
    }
});


//example 8

//basically form can be submitted by more actions ryt like on enter and click , but click action will be performed by click only and submitted , so to make it more feasible we use submit event listener
document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    let feedbackText= document.getElementById("feedbackDisplay");
    feedbackText.textContent = `feedback is: ${feedback}`;
    feedbackText.style.backgroundColor= "hotpink";
    feedbackText.style.color= "black";
    feedbackText.style.padding= "5px";
});


//example  9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent= "DOM fully loaded";
});


//example 10
document.getElementById("toggleHighlight").addEventListener("click", function(){
    let toggle = document.getElementById("descriptionText")
    toggle.classList.toggle("highlight")
    
});