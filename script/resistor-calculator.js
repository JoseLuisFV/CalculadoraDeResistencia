const bandColors = [
    ["black", 0], ["brown", 1], ["red", 2], ["orange", 3], 
    ["yellow", 4], ["green", 5], ["blue", 6], ["violet", 7], 
    ["gray", 8], ["white", 9]
];

const bandMultiplierColors = [...bandColors, ["gold", -1], ["silver", -2]];

const bandErrorColors = [
    ["brown", 1], ["red", 2], 
    ["gold", 5], ["silver", 10], 
    ["transparent", 0]
];

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
        const color = allColors[bandPosition][0];
        const value = allColors[bandPosition][1];
        return [color, value];
    }
    return changeBandColor;
};

const resistorValue = document.getElementById('resistor-value');
const firstBand = generateBand(0, bandColors.length - 1, bandColors); 
const secondBand = generateBand(0, bandColors.length - 1, bandColors);
const thirdBand = generateBand(0, bandColors.length - 1, bandColors); 
const multiplierBand = generateBand(0, bandMultiplierColors.length - 1, bandMultiplierColors);
const errorBand = generateBand(0, bandErrorColors.length -1, bandErrorColors);

let bands = {
    "first": {
        "changeColor": firstBand,
        "color": "black",
        "value": 0
    },
    "second": {
        "changeColor": secondBand,
        "color": "black",
        "value": 0
    },
    "third": {
        "changeColor": thirdBand,
        "color": "black",
        "value": 0
    },
    "multiplier": {
        "changeColor": multiplierBand,
        "color": "black",
        "value": 0
    },
    "error": {
        "changeColor": errorBand,
        "color": "brown",
        "value": 1
    },
}

const setResistor = (bands) => {
    const f = bands.first.value * 100;
    const s = bands.second.value * 10;
    const t = bands.third.value * 1;
    const multiplier = `x10^${bands.multiplier.value}` 
    const error =  `${bands.error.value}%`
    const value = f + s + t;
    return `${value}  ${multiplier}  ${error}`;
}

resistor.addEventListener('click', (e) => {
    const bandClicked = e.target;
    const positionClicked = e.offsetY;
    const clickedName = e.target.classList.item(1);
    if (clickedName != undefined){
        const band = bands[clickedName].changeColor(positionClicked); 
        bandClicked.setAttribute("style", `background-color: ${band[0]};`);
        bands[clickedName].color = band[0];
        bands[clickedName].value = band[1];
        resistorValue.textContent = setResistor(bands);
    }
});


resistorValue.textContent = setResistor(bands);