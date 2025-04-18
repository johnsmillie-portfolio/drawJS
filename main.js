
import {model as etch, setPointerPixel} from "./modules/controller.js";
// test change
console.log("Hello" + etch);
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByClassName("main")[0];
    
    main.appendChild(etch);
    setPointerPixel();
});