const quizQuestion = [
    {
        question: "What does HTML stand for ?",
        a: "Home Tool Markup Language",
        b: "Hyper Text Markup Language",
        c: "Hyperlink & Text Markup Language",
        d: "None of these",
        correct: "b",
    },
    {
        question: "Who is making the Web standards ?",
        a: "Microsoft",
        b: "The world wide web consortium",
        c: "Google",
        d: "Mozilla",
        correct: "b",
    },
    {
        question: "Which character is used to indicate an end tag ?",
        a: "^",
        b: "*",
        c: "<",
        d: "/",
        correct: "d",
    },
    {
        question: "Inside which HTML element do we put the javaScript ?",
        a: "<js>",
        b: "<javaScript>",
        c: "<script>",
        d: "<scripting>",
        correct: "c",
    },
    {
        question: "How do you write Hello world in an alert box ?",
        a: "msg('Hello world');",
        b: "alertbox('Hello world');",
        c: "alert('Hello world');",
        d: "msgbox('Hello world');",
        correct: "c",
    },
    {
        question: "How do you create a function in JavaScript ?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function:myFunction()",
        d: "myFunction()",
        correct: "b",
    },
    {
        question: "How to write an IF statement in JavaScript ?",
        a: "if i = 5",
        b: "if(i == 5)",
        c: "if i == 5 then",
        d: "if i = 5 then",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answer1s = document.querySelectorAll('.answer')
const question1s = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswer()

    const currentQuizData = quizQuestion[currentQuiz]
    question1s.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answer1s.forEach(answer1s => answer1s.checked = false)
}

function getSelected() {
    let answer = undefined;

    answer1s.forEach((answer1) => {
        if (answer1.checked) {
            answer = answer1.id;
        }
    });

    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizQuestion[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizQuestion.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h1 class="head-result">You have completed the quiz!</h1>
                <p class="score-result">Your score is ${score}/${quizQuestion.length}</p>
                <button onclick="location.reload()">Restart Quiz</button>
            `;
        }
    }
});