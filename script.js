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

document.getElementById("score").innerHTML=

`Ваш результат: ${score} из ${questions.length}`;

return;

}

showQuestion();

}
