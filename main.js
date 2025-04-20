
import {model as etch, setPointerPixel} from "./modules/controller.js";
// test change
console.log("Hello" + etch);
document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("main")[0].appendChild(etch);
    setPointerPixel();
});