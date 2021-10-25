//  question1 = "What does the acronym \"HTML\" stand for?";
//  question2 = "What does the acronym \"CSS\" stand for?";
//  question3 = "What is the data type for the numeral \ 12\ ?";
//  question4 = "What is the data type for a statement that evaluates to True or False?"
//  question5 = "what does the acronym \"DOM\" stand for?"
//  question6 = "What does the acronymn \"API\" Stand for?";
//  question7 = "In one word, What typ of statement is an \'IF\' statement?";
//  question8 = "Write the proper syntax for constructing a For Loop";
//  question9 = "what method returns a random number between 0 (inclusive),  and 1 (exclusive)?";
//  question10 = "What event attribute should you use to make a button interactive?"
// create an array to hold the questions that will be randomly assigned
// create start button to start the clock
// create the container to hold the questions
//add a submit button

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions= [];

let questions = [
    {
        question: "What does the acronym HTML stand for?",
        choice1: "High Time Multi Line",
        choice2: "Hyper Text Markup Landing",
        choice3: "Hyper Text Markup Language",
        choice4: "Heavy text Main Line",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What does the acronym CSS stand for?",
        choice1: "Close System State",
        choice2: "Cascading Style Sheet",
        choice3: "Crime Style Savage",
        choice4: "Clean Simp System",
        answer: "Cascading Style Sheet",
    },
    {
        question: "What is the data type for the numeral 12 ?",
        choice1: "Boolean",
        choice2: "Null",
        choice3: "sting",
        choice4: "Number",
        answer: "Number",
    },
    {
        question: "What does the acronym \"HTML\" stand for?",
        choice1: "High Time Multi Line",
        choice2: "Hyper Text Markup Landing",
        choice3: "Hyper Text Markup Language",
        choice4: "Heavy text Main Line",
        answer: "what does the acronym DOM stand for?",
    },
]

const scorePoints = 100;
const maxQuestions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
    localStorage.setItem("mostRecentScore", score)
    return window.location.assign("/end.html")
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of maxQuestions`
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`
    
    const questionsIndex = math.floor(math.random() * availableQuestions.lenght)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
}