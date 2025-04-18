

const model = document.createElement("div");
model.className = "model";
model.style.cssText = `
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 800px;
    width: 1200px;
    background: linear-gradient( rgb(250, 10, 10,.9) , red 85%, rgb(250, 10, 10,.9));
    border: 3px solid darkgrey;
    border-radius: 5px;
    margin: 25px;
    `;

    // CONTROLS
/********************************************************************************************* */
const controlsContainer = document.createElement("div");
controlsContainer.className = "controlsContainer";
controlsContainer.style.cssText = `
    display: flex;
    justify-content: center;
    `;

const controls = document.createElement("div");
controls.className = "controls";
controls.style.cssText = `
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;;
    width: 80%;
    `;


const penSwitchContainer = document.createElement("div");
penSwitchContainer.className = "penSwitchContainer";

const penColorSelectorContainer = document.createElement("div");
penColorSelectorContainer.className = "penColorSelectorContainer";

const bgColorSelectorContainer = document.createElement("div");
bgColorSelectorContainer.className = "bgColorSelectorContainer";




// PEN SWITCH   
/********************************************************************************************** */


const penSwitch = document.createElement("button");
penSwitch.className = "penSwitch";
penSwitch.textContent = "Pen Down";
penSwitch.style.cssText = `
    cursor: pointer;
    font-size: 20px;
    background-color: lightgrey;
    color: red;
    border: 2px solid white;
    border-radius: 5px;
    padding: 5px 15px;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);

  `;



  // PEN COLORS
/************************************************************************************************** */
penColorSelectorContainer.style.cssText = `
    position: relative;
    display: inline-block;
    `;

const penColorSelectorButton = document.createElement("button");
penColorSelectorButton.className = "penColorSelectorButton";
penColorSelectorButton.textContent = "Pen Color \u25be";
penColorSelectorButton.style.cssText = `
    cursor: pointer;
    font-size: 20px;
    background-color: red;
    color: white;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);
    padding: 5px 15px;
    border: 2px solid white;
    border-radius: 5px;
  `;



const penColorSelectorContent = document.createElement("div");
penColorSelectorContent.className = "penColorSelectorContent";
penColorSelectorContent.style.cssText = `
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    `;   


    // BACKGROUND COLOR
/*********************************************************************************************** */

bgColorSelectorContainer.style.cssText = `
    position: relative;
    display: inline-block;
    `;
const bgColorSelectorButton = document.createElement("button");
bgColorSelectorButton.className = "bgColorSelectorButton";
bgColorSelectorButton.textContent = "Background Color \u25be";
bgColorSelectorButton.style.cssText = `
    cursor: pointer;
    font-size: 20px;
    background-color: red;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    color: white;
    padding: 5px 15px;
    border: 2px solid white;
    border-radius: 5px;
  `;



const bgColorSelectorContent = document.createElement("div");
bgColorSelectorContent.className = "bgColorSelectorContent";
bgColorSelectorContent.style.cssText = `
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    `;   



 // BUILD THE SELECTORS
/************************************************************************************************* */

penSwitchContainer.appendChild(penSwitch);
penColorSelectorContainer.appendChild(penColorSelectorButton);
penColorSelectorContainer.appendChild(penColorSelectorContent);

bgColorSelectorContainer.appendChild(bgColorSelectorButton);
bgColorSelectorContainer.appendChild(bgColorSelectorContent);

const penColorBlack = document.createElement("paragraph");
const penColorBlue = document.createElement("paragraph");
const penColorGreen = document.createElement("paragraph");
const penColorYellow = document.createElement("paragraph");

penColorSelectorContent.appendChild(penColorBlack);
penColorSelectorContent.appendChild(penColorBlue);
penColorSelectorContent.appendChild(penColorGreen);
penColorSelectorContent.appendChild(penColorYellow);

const bgColorBlack = document.createElement("paragraph");
const bgColorBlue = document.createElement("paragraph");
const bgColorGreen = document.createElement("paragraph");
const bgColorYellow = document.createElement("paragraph");

bgColorSelectorContent.appendChild(bgColorBlack);
bgColorSelectorContent.appendChild(bgColorBlue);
bgColorSelectorContent.appendChild(bgColorGreen);
bgColorSelectorContent.appendChild(bgColorYellow);



// CANVAS CONTAINER
/********************************************************************************************************** */
const primary = document.createElement("div");
primary.className = "primary";
primary.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;




//KNOBS
/***************************************************************** */
const knobs = document.createElement("div");
knobs.className = "knobs";
knobs.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    `;
    
const knobUpDown = document.createElement("div");
knobUpDown.className = "knobUpDown";
knobUpDown.textContent ="";
knobUpDown.style.cssText = `
   max-width: 15%;
   height: 100px;
   width: 100px;
   border-radius: 50%;
   background-color: white;
   border: solid 4px darkgrey;
   box-shadow: 0px 16px 16px 0px rgba(0,0,0,0.3);

    `;

const knobRightLeft = document.createElement("div");
knobRightLeft.className = "knobRightleft";
knobRightLeft.style.cssText = `
   max-width: 15%;
   height: 100px;
   width: 100px;
   border-radius: 50%;
   border: solid 4px darkgrey;
   background-color: white;
   box-shadow: 0px 16px 16px 0px rgba(0,0,0,0.3);

    `;


const clearContainer = document.createElement("div");
const clearButton = document.createElement("button");
clearButton.className = "clearButton";
clearButton.textContent = "Clear";
clearButton.style.cssText = `
    cursor: pointer;
    font-size: 32px;
    background-color: white;
    color: red;
    padding: 5px 15px;
    border: 2px solid darkgrey;
    border-radius: 5px;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);

`;
clearContainer.appendChild(clearButton);



// BUILD MODEL
/***************************************************************************************** */
controls.appendChild(penSwitchContainer);
controls.appendChild(penColorSelectorContainer);
controls.appendChild(bgColorSelectorContainer);
controlsContainer.appendChild(controls);
knobs.appendChild(knobRightLeft);
knobs.appendChild(clearContainer);
knobs.appendChild(knobUpDown);
//primary.appendChild(canvas);

model.appendChild(controlsContainer);
model.appendChild(primary);
model.appendChild(knobs);





export {model, primary, penSwitch};