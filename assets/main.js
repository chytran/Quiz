const quizContainer = document.getElementById("quiz-container"); 
const submit = document.getElementById("submit");
const results = document.getElementById("results");

const buildQuiz = () => {

}

const showResults = () => {

}

const questions = [
    {
        question: "Who wrote the Harry Potter Series?",
        answers: {
            a: "J.K. Rowling",
            b: "Elon Musk",
            c: "Carson Chaos"
        },
        correctAnswer: "a"
    },

    {
        question: "What is the most popular food?",
        answers: {
            a: "Chicken",
            b: "Pizza",
            c: "Beans"
        },
        correctAnswer: "b"
    },

    {
        question: "Which one of these is a Javascript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
];

// Display quiz
buildQuiz();

// On submit
submit.addEventListener("click", showResults);