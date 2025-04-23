
import {model, primary} from "./model.js";
import { initCanvas, initPixels, setPixelColor, setPixelFocus, unsetPixelFocus, togglePenColor, toggleBgColor, togglePenSwitch } from "./helper.js";



let height = 500;
let width = 800;
let divisor = 10;
let rows = height/divisor;
let cols = width/divisor;
const pointer = [0,0];
let color = "black";
let bgColor = "antiquewhite";
let penOn = false;
let penColorDD = false;
let bgColorDD = false;
let canvas;
let pixels;
init();


function init(){
    canvas = initCanvas(height, width, bgColor);
    pixels = initPixels(height, width, divisor);
    canvas.replaceChildren(pixels);
    primary.replaceChildren(canvas);    
}



document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let key = e.key;
    const unset = [pointer[0], pointer[1]];
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
    unsetPixelFocus(unset[0], unset[1]);
    setPixelFocus(pointer[0], pointer[1]);
    penOn && setPixelColor(pointer[0], pointer[1], color);
    
})

document.addEventListener("click", (e) => {
   
    if(e.target.className === "clearButton"){
        init();
        setPixelFocus(pointer[0], pointer[1]);
        togglePenSwitch(true);
        togglePenColor(true);
        toggleBgColor(true);
        penOn = penColorDD = bgColorDD = false;
    }
    else if(e.target.className === "penSwitch"){
        togglePenSwitch(penOn);
        penOn = !penOn;
        penOn && setPixelColor(pointer[0], pointer[1], color);
    }
    else if(e.target.className === "penColorSelectorButton"){
        togglePenColor(penColorDD);
        penColorDD = !penColorDD;
    } 
    else if(e.target.className === "bgColorSelectorButton"){
        toggleBgColor(bgColorDD);
        bgColorDD = !bgColorDD;
    } 
    else if(e.target.className === "penColor"){
        color = e.target.id;
        penOn && setPixelColor(pointer[0], pointer[1], color);
        togglePenColor(true);
        penColorDD = false;
    }
    else if (e.target.className === "bgColor"){
        bgColor = e.target.id;
        let c = initCanvas(height, width, bgColor);
        c.appendChild(pixels);
        primary.replaceChildren(c);
        toggleBgColor(true);
        bgColorDD = false;
    }
    else{
        togglePenColor(true);
        toggleBgColor(true);
        penColorDD = false
        bgColorDD = false;
    }
    
})

export {model, setPixelFocus};