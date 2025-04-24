
function initPixels(height, width, divisor) {

    let rows = height / divisor;
    let cols = width / divisor;
    const gridContainer = document.createElement("div");
    gridContainer.className = "gridContainer";
    gridContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align items: center;
    `;
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.cssText = `
            display:flex;
            justify-content: center;
            align-items: center;
        `;
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("div");
            col.className = [i, j];
            col.tabIndex = "0";
            col.style.cssText = `
                height: ${divisor}px;
                width: ${divisor}px;
            `;
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
    return gridContainer;
}

function initCanvas(height, width, bgColor) {
    const canvas = document.createElement("div");
    canvas.className = "canvas";
    canvas.style.cssText = `
        height: ${height}px;
        width: ${width}px;
        background-color: ${bgColor};
        border: 4px solid grey;
        border-radius: 5px;
        margin: 1px;
    `;
    return canvas;
}


function unsetPixelFocus(i, j) {
    const className = i.toString(10) + "," + j.toString(10);
    const pixel = document.getElementsByClassName(className)[0];
    pixel.removeAttribute("id");
}


function setPixelFocus(i, j) {
    const className = i.toString(10) + "," + j.toString(10);
    const pixel = document.getElementsByClassName(className)[0];
    pixel.id = "pointer";
}


function setPixelColor(i, j, color) {
    const className = i.toString(10) + "," + j.toString(10);
    const pixel = document.getElementsByClassName(className)[0];
    pixel.style.backgroundColor = color;
}

function togglePenColor(penColorDD) {
    const content = document.getElementsByClassName("penColorSelectorContent")[0];
    const label = document.getElementsByClassName("penColorSelectorButton")[0];
    content.style.display = !penColorDD ? "block" : "none";
    label.textContent = "Pen Color" + (!penColorDD ? " \u25b4" : " \u25be");

}

function toggleBgColor(bgColorDD) {
    const content = document.getElementsByClassName("bgColorSelectorContent")[0];
    const label = document.getElementsByClassName("bgColorSelectorButton")[0];
    content.style.display = !bgColorDD ? "block" : "none";
    label.textContent = "Background Color" + (!bgColorDD ? " \u25b4" : " \u25be");
}

function togglePenSwitch(penOn) {
    const button = document.getElementsByClassName("penSwitch")[0];
    button.style.color = !penOn ? "#2fff4b" : "lightgray";
    button.style.border = !penOn ? "2px solid #2fff4b" : "2px solid lightgrey";
    button.textContent = !penOn ? "Pen On" : "Pen Off";

}

function toggleSize(sizeDD){
    const content = document.getElementsByClassName("sizeSelectorContent")[0];
    const label = document.getElementsByClassName("sizeSelectorButton")[0];
    content.style.display = sizeDD ? "none" : "block";
    label.textContent = "Size" + (sizeDD ? " \u25be" : " \u25b4"); 
}

function resetToggles(){
    togglePenColor(true);
    toggleBgColor(true);
    toggleSize(true);
}

function removeHighlight(items){
    if(items[0]){
        const list = document.getElementsByClassName("penColor");
        let f = Array.from(list).filter((ls) => ls.id === items[0]);
        f[0].style.backgroundColor = "grey";
        f[0].style.width = "100%";
    }
    if(items[1]){
        const list = document.getElementsByClassName("bgColor");
        let f = Array.from(list).filter((ls) => ls.id === items[1]);
        f[0].style.backgroundColor = "grey";
        f[0].style.width = "100%";
    }
    if(items[2]){
        const list = document.getElementsByClassName("size");
            let f = Array.from(list).filter((ls) => ls.id === items[2]);
            f[0].style.backgroundColor = "grey";
            f[0].style.width = "100%";
    }
}
function highlightItem(items){
    if(items[0]){
        const list = document.getElementsByClassName("penColor");
        let f = Array.from(list).filter((ls) => ls.id === items[0]);
        f[0].style.backgroundColor = "skyblue";
        f[0].style.width = "100%";

    }
    if(items[1]){
        const list = document.getElementsByClassName("bgColor");
        let f = Array.from(list).filter((ls) => ls.id === items[1]);
        f[0].style.backgroundColor = "skyblue";
        f[0].style.width = "100%";
    }
    if(items[2]){
        const list = document.getElementsByClassName("size");
            let f = Array.from(list).filter((ls) => ls.id === items[2]);
            f[0].style.backgroundColor = "skyblue";
            f[0].style.width = "100%";
    }
}

export { initCanvas, initPixels, setPixelColor, setPixelFocus, unsetPixelFocus, togglePenColor, toggleBgColor, togglePenSwitch, toggleSize, resetToggles, highlightItem, removeHighlight }