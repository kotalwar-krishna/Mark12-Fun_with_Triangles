const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".answer-submit");
const outputSub = document.querySelector("#output")

const correctAns = ["90°", "isosceles triangle", "one right angles","both 1 and 2","one obtuse angles"];

function calculateScore(){
    let score = 0;
    let i = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAns[i]){
            score = score + 1;
        }
        i = i + 1;
    }
    outputSub.innerText = "Your Score Is " + score;
    

}

submitBtn.addEventListener("click",calculateScore);
