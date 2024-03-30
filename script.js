let Rows=16,
    cols=16
    rainbow=false,
    sunset=false;
// Buttons container 
     // creating buttons elements    
const buttonsContainer=document.createElement("div")
     ,buttonOne=document.createElement("button")
     ,buttonTwo=document.createElement("button")
     ,buttonThree=document.createElement("button");
     // Naming buttons 
buttonOne.textContent="Button one ";
buttonTwo.textContent="Button two ";
buttonThree.textContent="Button three ";
     // Give classes to the created elements
buttonsContainer.className="buttons-container";
buttonOne.className="button";
buttonTwo.className="button";
buttonThree.className="button";

     // Appending container to HTML 
document.body.appendChild(buttonsContainer);
buttonsContainer.appendChild(buttonOne);
buttonsContainer.appendChild(buttonTwo);
buttonsContainer.appendChild(buttonThree);
// End of buttons container


// Creating container div
     // Creating container elements 
const container=document.createElement("div");
const mainText=document.createElement("h1");
const gridContainer=document.createElement("div");
     // Adding text to the elements
mainText.textContent="Welcome"; 
     // Give classes to the created elements
container.className="container";
mainText.className="main-text";
gridContainer.className="grid-container";
     // Appending container to HTML
document.body.appendChild(container);
container.appendChild(mainText);
container.appendChild(gridContainer);

// Creating divs 

for(i=0;i<Rows;i++){
     for(j=0;j<cols;j++){
     let gridDiv=document.createElement("div");
     gridDiv.className="grid";
     gridContainer.appendChild(gridDiv);
}}
