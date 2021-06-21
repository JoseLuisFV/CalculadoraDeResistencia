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
        if (positionClicked >= 150 && bandPosition < lastColor ) {
            bandPosition += 1;
        } else if (positionClicked <= 150 && bandPosition > firstColor ) {
            bandPosition -= 1;
        }
        const color = allColors[bandPosition]
        return color;
    }
    return changeBandColor;

};


const firstBandColor = generateBand(0, bandColors.length - 1, bandColors); 
const secondBandColor = generateBand(0, bandColors.length - 1, bandColors);
const thirdBandColor = generateBand(0, bandColors.length - 1, bandColors); 
const multiplierBandColor = generateBand(0, bandMultiplierColors.length - 1, bandMultiplierColors);
const errorBandColor = generateBand(0, bandErrorColors.length -1, bandErrorColors);


resistor.addEventListener('click', (e) => {
    const bandClicked = e.target;
    const positionClicked = e.offsetY;
    let bandColor; 

    if (bandClicked.classList.contains('first')){
        bandColor = firstBandColor(positionClicked);
        bandClicked.setAttribute("style", `background-color: ${bandColor};`);

    } else if (bandClicked.classList.contains('second')){
        bandColor = secondBandColor(positionClicked);
        bandClicked.setAttribute("style", `background-color: ${bandColor};`);

    } else if (bandClicked.classList.contains('third')){
        bandColor = thirdBandColor(positionClicked);
        bandClicked.setAttribute("style", `background-color: ${bandColor};`);

    } else if (bandClicked.classList.contains('multiplier')){
        bandColor = multiplierBandColor(positionClicked);
        bandClicked.setAttribute("style", `background-color: ${bandColor};`);

    } else if (bandClicked.classList.contains('error')){
        bandColor = errorBandColor(positionClicked);
        bandClicked.setAttribute("style", `background-color: ${bandColor};`);
    }
    //console.log(bandClicked)
});
