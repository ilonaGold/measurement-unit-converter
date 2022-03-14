const inputVal = document.querySelector('#input');
const length = document.querySelector('#length');
const volume = document.querySelector('#volume');
const mass = document.querySelector('#mass');

input.addEventListener('input', convert);

function convert() {
    const inputVal = input.value;
    
    const metersToFeet = (inputVal * 3.2808).toFixed(3);
    const feetToMeters = (inputVal / 3.2808).toFixed(3);
    const litersToGallons = (inputVal * 0.264172).toFixed(3);
    const gallonsToLiters = (inputVal / 0.264172).toFixed(3);
    const kilosToPounds = (inputVal * 2.20462).toFixed(3);
    const poundsToKilos = (inputVal / 2.20462).toFixed(3);
    
    length.textContent = `${inputVal} meters = ${metersToFeet} feet | 
    ${inputVal} feet = ${feetToMeters} meters`;
    
    volume.textContent = `${inputVal} liters = ${litersToGallons} gallons | 
    ${inputVal} gallons = ${gallonsToLiters} liters`;
    
    mass.textContent = `${inputVal} kilos = ${kilosToPounds} pounds | 
    ${inputVal} pounds = ${poundsToKilos} kilos`;
}