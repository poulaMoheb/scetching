let Rows=16,
    cols=16,
    blackFlag=true,
    rainbowFlag=false,
    sunsetFlag=false;
// Buttons container 
     // creating buttons elements    
const buttonsContainer=document.createElement("div")
     ,reset=document.createElement("button")
     ,rainbow=document.createElement("button")
     ,black=document.createElement("button")
     ,sunset=document.createElement("button")
     ,noOfPixels=document.createElement("button");
     // Naming buttons 
reset.textContent="Reset";
rainbow.textContent="Rainbow";
sunset.textContent="Sunset";
black.textContent="Black";
noOfPixels.textContent="Change";
     // Give classes to the created elements
buttonsContainer.className="buttons-container";
reset.className="button";
rainbow.className="button";
sunset.className="button";
black.className="button";
noOfPixels.className="button";

     // Appending container to HTML 
document.body.appendChild(buttonsContainer);
buttonsContainer.appendChild(reset);
buttonsContainer.appendChild(rainbow);
buttonsContainer.appendChild(sunset);
buttonsContainer.appendChild(black);
buttonsContainer.appendChild(noOfPixels);
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

// functions
      // remove grid pixels
function removeDiv(){   
     const gridTextDeleted=document.querySelectorAll(".grid");
     for(let i=0;i<gridTextDeleted.length;i++)
          gridTextDeleted[i].remove();
     } 
      // Creating div like pixels 
function drawingGridContainer(row,col){
     let id=0,styleGrid="grid-template-columns: ";
     for(i=0;i<row;i++){
          for(j=0;j<col;j++){
               let gridDiv=document.createElement("div");
               gridDiv.id=`grid${id}`;
               gridDiv.className="grid";
               gridContainer.appendChild(gridDiv);
               id++;
}         styleGrid+=" 1fr";
}
     const gridText=document.querySelectorAll(".grid");
     for(let i=0;i<gridText.length;i++){
          gridText[i].addEventListener("mouseenter",(e)=>{
               colorPixel(e.target.id);
     });
}
     gridContainer.style.cssText=`${styleGrid};`;
}
      // Coloring pixel

function colorPixel(id){
     let pixelHovered=document.getElementById(`${id}`);
     if(blackFlag){
     pixelHovered.style.cssText="background-color:black;";
     }
     else if(rainbowFlag){
          pixelHovered.style.cssText=`background-color:${randomRGB()};`;
     }
     else if(sunsetFlag){
               let rgb =0;
               let rgString= pixelHovered.style.backgroundColor;
               if(rgString){
                    let red=rgString.slice(Number(rgString.charAt("(")),Number(rgString.charAt(",")+1));
                    console.log(rgString.charAt("("));
               }else{
                    pixelHovered.style.cssText=`background-color:rgb(${rgb},${rgb},${rgb});`;
               }
          }
     //      console.log(red);
     //      if(rgb<=250 ){
     //      rgb+=10;
     //      if (!rgString)
     //      else{
     //      }
     //      console.log(rgString);
     // }
}
      // Creating random rgb value  
function randomRGB(){
     red=Math.floor(Math.random()*255);
     green=Math.floor(Math.random()*255);
     blue=Math.floor(Math.random()*255);
     return `rgb(${red},${green},${blue})`;
     
}
      // reset pixel to the primary color
function resetFun(id){
     const gridPixel=document.querySelector(`#${id}`);
     gridPixel.style.cssText="background-color:none;" ;
     rainbowFlag=false;
     sunsetFlag=false;
     blackFlag=true;
     Rows=cols=16;
     removeDiv();
     drawingGridContainer(Rows,cols);
}
// button events
reset.addEventListener("click",()=>{
     const gridPixels=document.querySelectorAll(".grid");
     gridPixels.forEach((item)=>{
          resetFun(item.id);
     })
});
rainbow.addEventListener("click",()=>{
     rainbowFlag=true;
     sunsetFlag=false;
     blackFlag=false
});
black.addEventListener("click",()=>{
     rainbowFlag=false;
     sunsetFlag=false;
     blackFlag=true;

});
sunset.addEventListener("click",()=>{
     rainbowFlag=false;
     sunsetFlag=true;
     blackFlag=false;

});
noOfPixels.addEventListener("click",()=>{
     Rows=cols=Number(prompt("enter a number"));
     removeDiv();
     drawingGridContainer(Rows,cols);
});

// on page load
drawingGridContainer(Rows,cols);




