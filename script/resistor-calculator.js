const bandColors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
const bandMultiplierColors = [...bandColors, "gold", "silver"];
const bandErrorColors = ["brown", "red", "gold", "silver", "transparent"];
const resistor = document.getElementById('resistor');


const generateBand = (first, last, colors) => {
    const allColors = colors;
    let firstColor = first;
    let lastColor = last;
    let bandPosition = 0;
    const changeBandColor = (positionClicked) => {
        if (positionClicked >= 125 && bandPosition < lastColor ) {
            bandPosition += 1;
        } else if (positionClicked <= 125 && bandPosition > firstColor ) {
            bandPosition -= 1;
        }
        const color = allColors[bandPosition]
        return color;
    }
    return changeBandColor;

};


const resistorValue = document.getElementById('resistor-value');
const firstBandColor = generateBand(0, bandColors.length - 1, bandColors); 
const secondBandColor = generateBand(0, bandColors.length - 1, bandColors);
const thirdBandColor = generateBand(0, bandColors.length - 1, bandColors); 
const multiplierBandColor = generateBand(0, bandMultiplierColors.length - 1, bandMultiplierColors);
const errorBandColor = generateBand(0, bandErrorColors.length -1, bandErrorColors);

let bands = {
    "first": {
        "changeColor": firstBandColor,
        "color": "black",
    },
    "second": {
        "changeColor": secondBandColor,
        "color": "black",
    },
    "third": {
        "changeColor": thirdBandColor,
        "color": "black",
    },
    "multiplier": {
        "changeColor": multiplierBandColor,
        "color": "black",
    },
    "error": {
        "changeColor": errorBandColor,
        "color": "brown",
    },
}

resistor.addEventListener('click', (e) => {
    const bandClicked = e.target;
    const positionClicked = e.offsetY;
    console.log(e.target.classList.item(1));
    const nameClass = e.target.classList.item(1)
    if (nameClass != undefined){
        const bandColor = bands[nameClass].changeColor(positionClicked); 
        bandClicked.setAttribute("style", `background-color: ${bandColor};`);
        bands[nameClass].color = bandColor
        console.log(bands[nameClass].color);
    }

});





resistorValue.textContent = "Hola";