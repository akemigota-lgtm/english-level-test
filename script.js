let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

startBtn.addEventListener("click", startTest);
nextBtn.addEventListener("click", nextQuestion);

function startTest(){

document.getElementById("start-screen").style.display="none";
document.getElementById("quiz").style.display="block";

showQuestion();

}

function showQuestion(){

selectedAnswer=null;

const q=questions[currentQuestion];
document.getElementById("questionNumber").textContent =
`Вопрос ${currentQuestion + 1} из ${questions.length}`;
document.getElementById("question").textContent=q.question;

const answers=document.getElementById("answers");

answers.innerHTML="";

q.answers.forEach((answer,index)=>{

const div=document.createElement("div");

div.className="answer";

div.textContent=answer;

div.onclick=function(){

selectedAnswer=index;

document.querySelectorAll(".answer").forEach(el=>{

el.style.background="#334155";

});

div.style.background="#3b82f6";

nextBtn.style.display="inline-block";

};

answers.appendChild(div);

});

nextBtn.style.display="none";

}

function nextQuestion(){

if(selectedAnswer===null) return;

if(selectedAnswer===questions[currentQuestion].correct){

score++;

}

currentQuestion++;

if(currentQuestion>=questions.length){

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

let level = "";

if (score <= 5) {
    level = "A1 Beginner";
} else if (score <= 10) {
    level = "A2 Elementary";
} else if (score <= 15) {
    level = "B1 Intermediate";
} else if (score <= 20) {
    level = "B2 Upper-Intermediate";
} else if (score <= 25) {
    level = "C1 Advanced";
} else {
    level = "C2 Proficient";
}

document.getElementById("score").innerHTML = `
<h1>🎉 Тест завершён!</h1>

<p><b>Правильных ответов:</b> ${score} из ${questions.length}</p>

<h2>Ваш уровень английского:</h2>

<h1 style="color:#3b82f6;">${level}</h1>
`;

return;

}

showQuestion();

}
