const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputMsg1 = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3){
    const totalSumOfAngles = angle1 + angle2 + angle3;

    return totalSumOfAngles;
}


function isTriangle(){
    const a1 = Number(angleInput[0].value);
    const a2 = Number(angleInput[1].value);
    const a3 = Number(angleInput[2].value);
  const anglesSum = sumOfAngles(a1, a2, a3);
  console.log(anglesSum);

  if(anglesSum === 180){
     outputMsg1.innerText = "YES,  Given Angles Form a Triangle"
  }else{
      outputMsg1.innerText = "No,  Given Angles Not Form a Triangle"
  }
}


isTriangleBtn.addEventListener("click", isTriangle)


