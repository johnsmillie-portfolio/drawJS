
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
        border: 2px solid grey;
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
    button.textContent = !penOn ? "Pen On" : "Pen Off";

}

export { initCanvas, initPixels, setPixelColor, setPixelFocus, unsetPixelFocus, togglePenColor, toggleBgColor, togglePenSwitch }