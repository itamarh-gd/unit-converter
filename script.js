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
        const results = {meter2Feet, feet2Meter, liter2Gallon, gallon2Liter, kg2Pound, pound2Kg}
        return results
}

function renderResults(results) {
        lengthEl.innerText = `${unitValue} meters = ${results.meter2Feet} feet | ${unitValue} feet = ${results.feet2Meter} meters`
        volumeEl.innerText = `${unitValue} liters = ${results.liter2Gallon} gallons | ${unitValue} gallons = ${results.gallon2Liter} liters`
        massEl.innerText = `${unitValue} kilograms = ${results.kg2Pound} pounds | ${unitValue} pounds = ${results.pound2Kg} kilograms`
}
