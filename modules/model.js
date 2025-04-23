

const model = document.createElement("div");
model.className = "model";
model.style.cssText = `
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 800px;
    width: 1100px;
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
    justify-content: center;
    align-items: center;;
    width: 80%;
    gap: 32px;
    `;


const penSwitchContainer = document.createElement("div");
penSwitchContainer.className = "penSwitchContainer";

const penColorSelectorContainer = document.createElement("div");
penColorSelectorContainer.className = "penColorSelectorContainer";

const bgColorSelectorContainer = document.createElement("div");
bgColorSelectorContainer.className = "bgColorSelectorContainer";

const sizeSelectorContainer = document.createElement("div");
sizeSelectorContainer.className = "sizeSelectorContainer";


// PEN SWITCH   
/********************************************************************************************** */
const penSwitch = document.createElement("button");
penSwitch.className = "penSwitch";
penSwitch.textContent = "Pen Off";
penSwitch.style.cssText = `
    cursor: pointer;
    font-size: 20px;
    background-color: red;
    color: lightgray;
    border: 2px solid white;
    border-radius: 5px;
    padding: 5px 15px;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);
    width: 125px;
  `;

// COLORS
/************************************************************************************************ */

const colors = ["Black", "White", "Antique White", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

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
    min-width: 150px;
  `;



const penColorSelectorContent = document.createElement("div");
penColorSelectorContent.className = "penColorSelectorContent";
penColorSelectorContent.style.cssText = `
    display: none;
    position: absolute;
    background-color: grey;
    min-width: 160px;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);
    padding: 5px 10px;
    z-index: 1;
    `;   

colors.forEach((el) => {
    let b = document.createElement("button");
    b.textContent = el;
    b.className = "penColor";
    b.id = el.toLowerCase().replace(" ", "");
    b.style.cssText = `
        cursor: pointer;
        color: ${el.toLowerCase().replace(" ","")};
        display: block;
        background-color: inherit;
        text-align: left;
        border: none;
        font-size: 18px;
        padding: 5px 10px;
    `;
    penColorSelectorContent.appendChild(b);
})

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
    min-width: 225px
  `;


const bgColorSelectorContent = document.createElement("div");
bgColorSelectorContent.className = "bgColorSelectorContent";
bgColorSelectorContent.style.cssText = `
    display: none;
    position: absolute;
    background-color: grey;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 5px 10px;
    z-index: 1;
    `;   


colors.forEach((el) => {
    let b = document.createElement("button");
    b.textContent = el;
    b.className = "bgColor";
    b.id = el.toLowerCase().replace(" ", "");
    b.style.cssText = `
        cursor: pointer;
        color: ${el.toLowerCase().replace(" ", "")};
        display: block;
        background-color: inherit;
        text-align: left;
        border: none;
        font-size: 18px;
        padding: 5px 10px;
    `;
    bgColorSelectorContent.appendChild(b);
})

// SIZE SELELCTOR
/*********************************************************************** */

sizeSelectorContainer.style.cssText = `
    display; inline-block;
    position: relative;
`;

const sizeSelectorButton = document.createElement("button");
sizeSelectorButton.className = "sizeSelectorButton";
sizeSelectorButton.textContent = "Size \u25be";
sizeSelectorButton.style.cssText = `
    cursor: pointer;
    font-size: 20px;
    background-color: red;
    color: white;
    box-shadow: 0px 8px 8px 0px rgba(25,0,0,0.2);
    padding: 5px 15px;
    border: 2px solid white;
    border-radius: 5px;
    min-width: 125px;
`;

const sizeSelectorContent = document.createElement("div");
sizeSelectorContent.className = "sizeSelectorContent";
sizeSelectorContent.style.cssText = `
    display: none;
    position: absolute;
    background-color: grey;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 5px 10px;
    z-index: 1;
    `;   


["Small", "Medium", "Large"].forEach((el) => {
    let b = document.createElement("button");
    b.textContent = el;
    b.className = "size";
    b.id = el.toLowerCase();
    b.style.cssText = `
        cursor: pointer;
        display: block;
        background-color: inherit;
        text-align: left;
        border: none;
        font-size: 18px;
        padding: 5px 10px;
    `;
    sizeSelectorContent.appendChild(b);
})

const small = {
    "height":300,
    "width": 600,
    "modelHeight": "600px",
    "modelWidth": "900px"
}

const medium = {
    "height": 500,
    "width": 800,
    "modelHeight": "800px",
    "modelWidth": "1100px"
}

const large = {
    "height": 800,
    "width": 1100,
    "modelHeight": "1100px",
    "modelWidth": "1400px"
}


 // BUILD THE SELECTORS
/************************************************************************************************* */

penSwitchContainer.appendChild(penSwitch);
penColorSelectorContainer.appendChild(penColorSelectorButton);
penColorSelectorContainer.appendChild(penColorSelectorContent);

bgColorSelectorContainer.appendChild(bgColorSelectorButton);
bgColorSelectorContainer.appendChild(bgColorSelectorContent);

sizeSelectorContainer.appendChild(sizeSelectorButton);
sizeSelectorContainer.appendChild(sizeSelectorContent);

// CANVAS CONTAINER
/********************************************************************************************** */
const primary = document.createElement("div");
primary.className = "primary";
primary.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    `;

// DIRECTIONS
/************************************************************************************************ */

const directions = document.createElement("p");
directions.style.cssText = `
    text-align: center;
    background-color: red;
    color: silver;
    padding-top: 10px;
    margin: 0px;
`;
directions.textContent = "Use The Arrow Keys To Move Cursor";

//KNOBS
/***************************************************************** ***************/
const knobs = document.createElement("div");
knobs.className = "knobs";
knobs.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
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
controls.appendChild(sizeSelectorContainer);
controlsContainer.appendChild(controls);
knobs.appendChild(knobRightLeft);
knobs.appendChild(clearContainer);
knobs.appendChild(knobUpDown);
//primary.appendChild(canvas);

model.appendChild(controlsContainer);
model.appendChild(primary);
model.appendChild(directions);
model.appendChild(knobs);





export {model, primary, penSwitch, small, medium, large};