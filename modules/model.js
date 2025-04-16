

const model = document.createElement("div");
model.className = "model";
model.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background: linear-gradient( rgb(250, 10, 10,.9) , red 85%, rgb(250, 10, 10,.9));
    `;


const controls = document.createElement("div");
controls.className = "controls";
controls.style.cssText = `
    height: 10%;
    `;

const primary = document.createElement("div");
primary.className = "primary";
primary.style.cssText = `
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const canvas = document.createElement("div");
canvas.className = "canvas";
canvas.style.cssText = `
    height: 500px;
    width: 700px;
    background-color: antiquewhite;
    `;    

const knobs = document.createElement("div");
knobs.className = "knobs";
knobs.style.cssText = `
    display: flex;
    justify-conent: space-between;
    align-items: center;
    height: 20%;
    `;
    
const knobUpDown = document.createElement("div");
knobUpDown.className = "knobUpDown";
knobUpDown.style.cssText = `
   max-width: 15%;
    
    `;

const knobRightLeft = document.createElement("div");
knobRightLeft.className = "knobRightleft";
knobRightLeft.style.cssText = `
    max-width: 15%;
    `;

knobs.appendChild(knobRightLeft);
knobs.appendChild(knobUpDown);
primary.appendChild(canvas);

model.appendChild(controls);
model.appendChild(primary);
model.appendChild(knobs);





export {model};