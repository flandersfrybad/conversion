document.addEventListener("DOMContentLoaded", function() {
    renderOutput();
})

const metersToFeetConversion = 3.281
const feetToMetersConversion = 0.305
const litersToGallonsConversion = 0.264
const gallonsToLitersConversion = 3.785
const kilosToPoundsConversion = 2.204
const poundsToKilosConversion = 0.454
const inputElement = document.getElementById("input-el")
const convertButton = document.getElementById("convert-btn")

convertButton.addEventListener("click", function() {
    renderOutput()
})

function renderOutput() {
    const inputValue = parseFloat(inputElement.value)
    const units = [
        ["Length (Meter/Feet)", "feet", "meters", metersToFeetConversion, feetToMetersConversion], 
        ["Volume (Liters/Gallons)", "gallons", "liters", litersToGallonsConversion, gallonsToLitersConversion], 
        ["Mass (Kilograms/Pounds)", "pounds", "kilos", kilosToPoundsConversion, poundsToKilosConversion]
    ]
    let outputString = ""
    for (let i = 0; i < units.length; i++) {
        outputString += `<div class="output-item">
                            <div class="outbox">
                                ${units[i][0]}
                            </div>
                                <div class="outlittle">
                                    ${inputValue} ${units[i][2]} = ${(units[i][3] * inputValue).toFixed(3)} ${units[i][1]} | 
                                    ${inputValue} ${units[i][1]} = ${(units[i][4] * inputValue).toFixed(3)} ${units[i][2]}
                                </div>
                         </div>`
    }
    const outputElement = document.getElementById("ul-el")
    outputElement.innerHTML = outputString
}
