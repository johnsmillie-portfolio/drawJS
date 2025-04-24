
import {model as etch, setPixelFocus, init, highlightItem} from "./modules/controller.js";
// test change
console.log("Hello" + etch);
document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("main")[0].appendChild(etch);
    init();
    setPixelFocus(0,0);
    highlightItem(["black", "antiquewhite", "medium"]);    
});