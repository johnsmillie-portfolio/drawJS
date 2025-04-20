
import {model, primary} from "./model.js";
import { initCanvas, setPixelColor, setPixelFocus } from "./helper.js";

let height = 500;
let width = 800;
let divisor = 10;
let rows = height/divisor;
let cols = width/divisor;
let pointer = [0,0];
let color = "black";
let bgColor = "antiquewhite";
let penOn = false;
const pace = 1;
init();


function init(){
    const canvas = initCanvas(height, width, divisor, bgColor);
    primary.appendChild(canvas);
}

function setPointerPixel(){
    setPixelFocus(pointer[0], pointer[1]);
}


document.addEventListener("keydown", (e) => {
    let key = e.key;
    if(key === "ArrowDown" && pointer[0] < rows-1){
        pointer[0]++;
    }
    else if(key === "ArrowUp" && pointer[0] > 0){
        pointer[0]--;
    }
    else if(key === "ArrowLeft" && pointer[1] > 0){
        pointer[1]--
    }
    else if(key === "ArrowRight" && pointer[1] < cols-1){
        pointer[1]++;
    }
    setPixelFocus(pointer[0], pointer[1]);
    penOn && setPixelColor(pointer[0], pointer[1], color);

})

document.addEventListener("click", (e) => {
    if(e.target.id === "focusable"){
        pointer = e.target.className.split(",");
        setPixelFocus(pointer[0], pointer[1]);
        penOn && setPixelColor(pointer[0], pointer[1], color);
    }   
    else if(e.target.className === "clearButton"){
        primary.replaceChildren(initCanvas(height,width,divisor,bgColor))
    }
    else if(e.target.className === "penSwitch"){
        penOn = !penOn;
        e.target.style.color = penOn? "#2fff4b" : "lightgray";
        e.target.textContent = penOn? "Pen On" : "Pen Off";
        penOn && setPixelColor(pointer[0], pointer[1], color);
    } 
})

export {model, setPointerPixel};