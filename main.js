
import {model as etch, setPixelFocus} from "./modules/controller.js";
// test change
console.log("Hello" + etch);
document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("main")[0].appendChild(etch);
    setPixelFocus(0,0);
});