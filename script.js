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
