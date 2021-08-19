const quizForm = document.querySelector('.quiz-form')

const subBtn= document.querySelector('#submit-ans-btn');

const outputEl = document.querySelector('#output')

//array for storing answers

const answerArray = ["90", "right angled"]

function calculateScore(){
    let score =0;
    let index=0;

    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value===answerArray[index]){
            score++;
        }
        index++;
    }
    outputEl.innerText = `Your Score is ${score} `
}

subBtn.addEventListener('click', calculateScore)
