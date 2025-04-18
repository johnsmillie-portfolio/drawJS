
import {model, primary} from "./model.js";
import { initCanvas, setPixel, setPointer } from "./helper.js";

let height = 500;
let width = 800;
let divisor = 100;
let pointer = [0,0];
const canvas = initCanvas(height, width, divisor);
primary.appendChild(canvas);

function setPointerPixel(){
    setPointer(pointer[0], pointer[1]);
}

export {model, setPointerPixel};