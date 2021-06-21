const bandColors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];

const bandMultiplierColors = [...bandColors, "gold", "silver"];

const bandErrorColors = ["brown", "red", "gold", "silver", "none"];

const resistor = document.getElementById('resistor');

console.log(resistor);

resistor.addEventListener('click', (e) => {
    if (e.target.classList.contains('.error-band')){
        console.log('Hola');
    }
});