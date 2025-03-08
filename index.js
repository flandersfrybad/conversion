document.addEventListener("DOMContentLoaded", function() {
    renderOutput();
})

const inputElement = document.getElementById("input-el")
const convertButton = document.getElementById("convert-btn")

convertButton.addEventListener("click", function() {
    renderOutput()
})

function renderOutput() {
    const inputValue = parseFloat(inputElement.value)
    const units = [
        ["Length (Meter/Feet)", "feet", "meters", 3.281, 0.305], 
        ["Volume (Liters/Gallons)", "gallons", "liters", 0.264, 3.785], 
        ["Mass (Kilograms/Pounds)", "pounds", "kilos", 2.204, 0.454]
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