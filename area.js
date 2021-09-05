const base = document.querySelector("#base")
const height = document.querySelector("#height")
const calculateArea = document.querySelector("#find-area")
const outputArea = document.querySelector("#output")

function areaCalculator(){
    const areaOfTriangle = (1/2) * Number(base.value) * Number(height.value);
    outputArea.innerText = "Area of Triangle with base "+base.value + " and height " + height.value + " is: " + areaOfTriangle;
}

calculateArea.addEventListener("click", areaCalculator)