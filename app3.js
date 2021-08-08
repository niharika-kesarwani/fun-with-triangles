const back_btn = document.querySelector("#back-btn");
const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result3");

const correct_answers = ['90°', 'right angled', 'yes', '30°', '5 cm'];

function calculate() {
    window.scrollTo(0, 11500);
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    console.log(formResults.entries);
    for (let entry of formResults.values()){
        if (entry === correct_answers[index++]){
            console.log("correct");
            score++;
        }
        else
            console.log("incorrect");
    }
    if (score===0){
        result.innerHTML="Oh no! Your score is "+ score+" :("+"<br/><br/>"+"Better luck next time :)";
    }
    else {
        result.innerHTML="Your score is "+ score+" :)"+"<br/><br/>"+"Good luck !!!";
    }
    console.log(score)
}
submit.style.margin="0rem";
result.style.margin="1rem 0rem";
quizForm.style.margin="3rem 0rem";
back_btn.style.margin="0rem";
submit.addEventListener('click', () => {
    calculate(),
    window.scrollTo(0, document.body.offsetHeight)
}); 
