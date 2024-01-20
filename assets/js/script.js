
// Wait for the DOM to finish lading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded",function(){
    let button=document.getElementsByTagName("button");
    for(button of buttons){
        buttons.addEventListener("click",function(){
          if(this.getAttribute("data-type")==="submit"){
            alert("You clicked Submit");
          }else{
            let gameType=this.getAttributr("data-type");
            alert(`You clicked ${data-type}`);
          }  
        })
    }
})
function runGame(){

}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}