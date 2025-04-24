
import {model, primary, small, medium, large} from "./model.js";
import { initCanvas, initPixels, setPixelColor, setPixelFocus, unsetPixelFocus, togglePenColor, toggleBgColor, togglePenSwitch, toggleSize, resetToggles, highlightItem , removeHighlight } from "./helper.js";


let size = "medium";
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
let sizeDD = false;
let canvas;
let pixels;



function init(){
    rows = height/divisor;
    cols = width/divisor;
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
    switch(e.target.className){
        case "clearButton": 
            init();
            setPixelFocus(pointer[0], pointer[1]);
            resetToggles();
            togglePenSwitch(true);
            penOn = penColorDD = bgColorDD = sizeDD = false;
            break;
        case "penSwitch":
            togglePenSwitch(penOn);
            penOn = !penOn;
            penOn && setPixelColor(pointer[0], pointer[1], color);
            break;
        case "penColorSelectorButton":
            togglePenColor(penColorDD);
            penColorDD = !penColorDD;
            break; 
        case "bgColorSelectorButton":
            toggleBgColor(bgColorDD);
            bgColorDD = !bgColorDD;
            break; 
        case "penColor":
            removeHighlight([color, null, null]);
            color = e.target.id;
            highlightItem([color,null,null]);
            penOn && setPixelColor(pointer[0], pointer[1], color);
            togglePenColor(true);
            penColorDD = false;
            break;
        case  "bgColor":
            removeHighlight([null, bgColor, null]);
            bgColor = e.target.id;
            highlightItem([null, bgColor, null]);
            let c = initCanvas(height, width, bgColor);
            c.appendChild(pixels);
            primary.replaceChildren(c);
            toggleBgColor(true);
            bgColorDD = false;
            break;
        case "sizeSelectorButton":
            toggleSize(sizeDD);
            sizeDD = !sizeDD;
            break;
        case "size":
            removeHighlight([null, null, size]);
            size = e.target.id;
            highlightItem([null, null, size]);
            const obj = e.target.id === "small" ? small : e.target.id === "medium" ? medium : large;
            height = obj.height;
            width = obj.width;
            init();
            document.getElementsByClassName("model")[0].style.height = obj.modelHeight;
            document.getElementsByClassName("model")[0].style.width = obj.modelWidth;
            pointer[0] = pointer[1] = 0;
            setPixelFocus(0,0);
            togglePenSwitch(true);
        default: 
            resetToggles();
            penColorDD = bgColorDD = sizeDD = false;
            console.log(e.target);
            if(e.target.className.indexOf(",") !== -1){
                unsetPixelFocus(pointer[0], pointer[1])
                const p = e.target.className.split(",");
                pointer[0] = p[0];
                pointer[1] = p[1];
                setPixelFocus(pointer[0], pointer[1]);
            }        
    }
    
})

export {model, setPixelFocus, init, highlightItem};