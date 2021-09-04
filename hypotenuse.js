const inputSides = document.querySelectorAll(".side-input")
const calculateHyp = document.querySelector("#calculate-hyp")
const outputhyp = document.querySelector("#output")

function calculateSumOfSquere(a, b){
    var c = a**2 + b**2;
    return c;

}

function calculateHypotenuse(){
    var d = calculateSumOfSquere(Number(inputSides[0].value), Number(inputSides[1].value));
    const hypotenuse = Math.sqrt(d);
    outputhyp.innerText = "Hypotenuse Lenghth Is: " + hypotenuse;
    // console.log("hi")

}

calculateHyp.addEventListener("click", calculateHypotenuse)