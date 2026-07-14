let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function startTest() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    selectedAnswer = null;

    const q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("div");
        btn.className = "answer";
        btn.innerText = answer;

        btn.onclick = () => {
            selectedAnswer = index;

            document.querySelectorAll(".answer").forEach(el => {
                el.style.background = "#334155";
            });

            btn.style.background = "#3b82f6";
            document.getElementById("nextBtn").style.display = "inline-block";
        };

        answersDiv.appendChild(btn);
    });

    document.getElementById("nextBtn").style.display = "none";
}

function nextQuestion() {
    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";

        document.getElementById("score").innerHTML =
            `Ваш результат: ${score} из ${questions.length}`;
        return;
    }

    showQuestion();
}
