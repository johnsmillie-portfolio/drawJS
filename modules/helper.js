



function initPixels(height, width, divisor){
    
    let rows = height/divisor;
    let cols = width/divisor;
    const gridContainer = document.createElement("div");
    gridContainer.className = "gridContainer";
    gridContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align items: center;
    `;
    for(let i = 0; i < rows; i++){
        let row = document.createElement("div");
        row.className = "row";
        row.style.cssText = `
            display:flex;
            justify-content: center;
            align-items: center;
        `;
        for(let j = 0; j < cols; j++){
            let col = document.createElement("div");
            col.className = [i,j];
            col.style.cssText = `
                border: 1px solid black;
                height: ${divisor}px;
                width: ${divisor}px;
            `
            row.appendChild(col);
        }
        gridContainer.appendChild(row);
    }
    return gridContainer;
}

function initCanvas(height, width, divisor){
    const canvas = document.createElement("div");
    //canvas.style.backg
    canvas.className = "canvas";
    canvas.style.cssText = `
        height: ${height}px;
        width: ${width}px;
        background-color: antiquewhite;
        border: 2px solid grey;
        border-radius: 5px;
    `; 
    const grid = initPixels(height, width, divisor);
    canvas.appendChild(grid);
    return canvas;   
}

function getRandom(num){
    return ((Math.random())*num).toFixed(0);  
    
}

function setPointer(i,j){
    const className =  i.toString(10) + "," + j.toString(10);
    const pixel = document.getElementsByClassName(className)[0];
    pixel.style.border = "solid 1px blue";
}


function setPixel( i, j, color){
    const className =  i.toString(10) + "," + j.toString(10);
    const pixel = document.getElementsByClassName(className)[0];
    pixel.style.backgroundColor = color;
}


export {initCanvas, setPixel, setPointer}