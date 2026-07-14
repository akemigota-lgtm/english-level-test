let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");

startBtn.addEventListener("click", startTest);
nextBtn.addEventListener("click", nextQuestion);

function startTest(){

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    showQuestion();

}

function showQuestion(){

    selectedAnswer = null;

    const q = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
    `Вопрос ${currentQuestion + 1} из ${questions.length}`;

    document.getElementById("question").textContent = q.question;

    progressBar.style.width =
    ((currentQuestion) / questions.length * 100) + "%";

    const answers = document.getElementById("answers");

    answers.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const div = document.createElement("div");

        div.className = "answer";

        div.textContent = answer;

        div.onclick = function(){

            selectedAnswer = index;

            document.querySelectorAll(".answer").forEach(el=>{

                el.style.background="#334155";
                el.style.border="2px solid transparent";

            });

            div.style.background="#2563eb";
            div.style.border="2px solid white";

            nextBtn.style.display="block";

        };

        answers.appendChild(div);

    });

    nextBtn.style.display="none";

}

function nextQuestion(){

    if(selectedAnswer === null){
        return;
    }

    if(selectedAnswer === questions[currentQuestion].correct){
        score++;
    }

    currentQuestion++;

    if(currentQuestion >= questions.length){

        progressBar.style.width = "100%";

        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";

        let level = "";

        if(score <= 5){
            level = "A1 Beginner";
        }
        else if(score <= 10){
            level = "A2 Elementary";
        }
        else if(score <= 15){
            level = "B1 Intermediate";
        }
        else if(score <= 20){
            level = "B2 Upper-Intermediate";
        }
        else if(score <= 25){
            level = "C1 Advanced";
        }
        else{
            level = "C2 Proficient";
        }

        const percent = Math.round(score / questions.length * 100);

        document.getElementById("score").innerHTML = `
            <h2>${score} из ${questions.length}</h2>

            <h1 style="color:#3b82f6;margin:20px 0;">
                ${level}
            </h1>

            <p>Процент правильных ответов: <b>${percent}%</b></p>
        `;

        return;
    }

    showQuestion();

}
