// take the input
// calculate all the values
// render the results to the elements
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let unitValue = 0

const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    unitValue = document.getElementById("input").value
    const results = calculate(unitValue)
    renderResults(results)
})

function calculate(unitValue) {
        const meter2Feet = (unitValue * 3.281).toFixed(3)
        const feet2Meter = (unitValue / 3.281).toFixed(3)
        const liter2Gallon = (unitValue * 0.264).toFixed(3)
        const gallon2Liter = (unitValue / 0.264).toFixed(3)
        const kg2Pound = (unitValue * 2.204).toFixed(3)
        const pound2Kg = (unitValue / 2.204).toFixed(3)
        const results = [meter2Feet, feet2Meter, liter2Gallon, gallon2Liter, kg2Pound, pound2Kg]
        return results
}

function renderResults(results) {
        lengthEl.innerText = `${unitValue} meters = ${results[0]} feet | ${unitValue} feet = ${results[1]} meters`
        volumeEl.innerText = `${unitValue} liters = ${results[2]} gallons | ${unitValue} gallons = ${results[3]} liters`
        massEl.innerText = `${unitValue} kilograms = ${results[4]} pounds | ${unitValue} pounds = ${results[5]} kilograms`
}
