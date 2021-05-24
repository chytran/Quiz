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
const answerEls = document.querySelectorAll(".answer");
const quizHolder = document.getElementById("container-liner");


// Building the quiz
const buildQuiz = () => {
    deselectAnswer();

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

// Delect answers when on to the next question
function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

// Selected the answewr
function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
       if (answerEl.checked) {
           answer = answerEl.id;
       }
    });
    return answer;
}

submitButton.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    console.log(answer);

    
    if(answer) {
        if(answer === questions[currentQuestion].correctAnswer){
            score++;
        }

        currentQuestion++;
        if(currentQuestion < questions.length){
            buildQuiz();  
        } else {
            quizHolder.innerHTML = `
                <h2>You score correctly ${score}/${questions.length} questions</h2>
                <button><a class="result__button" href="/assets/index.html">Try again</a></button>
            `;
        }
    }

    
});

// On submit
submit.addEventListener("click", showResults);

