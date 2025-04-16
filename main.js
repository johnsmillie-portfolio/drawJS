
import {model as etch} from "./modules/model.js";
// test change
console.log("Hello" + etch);
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByClassName("main")[0];
    
    main.appendChild(etch);
});