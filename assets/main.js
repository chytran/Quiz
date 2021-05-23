const quizContainer = document.getElementById("quiz-container"); 
const submit = document.getElementById("submit");
const results = document.getElementById("results");

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById("submit");



// Building the quiz
const buildQuiz = () => {
    questionEl.innerHTML = questions[currentQuestion].question;

    a_text.innerHTML = questions[currentQuestion].answers.a;
    b_text.innerHTML = questions[currentQuestion].answers.b;
    c_text.innerHTML = questions[currentQuestion].answers.c;
    d_text.innerHTML = questions[currentQuestion].answers.d;
}

const questions = [
    {
        question: "Who wrote the Harry Potter Series?",
        answers: {
            a: "J.K. Rowling",
            b: "Elon Musk",
            c: "Carson Chaos",
            d: "John Cena"
        },
        correctAnswer: "a"
    },

    {
        question: "What is the most popular food?",
        answers: {
            a: "Chicken",
            b: "Pizza",
            c: "Beans",
            d: "Cheese"
        },
        correctAnswer: "b"
    },

    {
        question: "Which one of these is a Javascript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
            d: "React.js"
        },
        correctAnswer: "c"
    },
];



// Display quiz
buildQuiz();

// Selected the answewr
function getSelected(){
    const answerEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answerEls.forEach((answerEl) => {
       if (answerEl.checked) {
           answer = answerEl.id;
       }
       return answer;
    });
}

submitButton.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    console.log(answer);

    
    if(answer) {
        currentQuestion++;
        if(currentQuestion < questions.length){
            buildQuiz();  
        } else alert("Quiz completed");
    }

    
});

// On submit
submit.addEventListener("click", showResults);