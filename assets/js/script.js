//Enables user to start quiz
const quizBox = document.querySelector('.quiz-box')

function startQuiz() {

    const startBtn = document.querySelector('.start-btn')

    startBtn.onclick = () => {
        quizBox.classList.add('active')

        showQuizQuestions(0)
        questionIndicator(1)
    }
}

startQuiz();

//Changes questions from 1 to 15
let questionsCount = 0;
let questionsNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn')

nextBtn.onclick = () => {
    if(questionsCount < questions.length - 1) {
        questionsCount++
        showQuizQuestions(questionsCount)

        questionsNumb++
        questionIndicator(questionsNumb)

        nextBtn.classList.remove('active')
    } else {
        showQuizResultBox()
    }
}

//Shows user quiz questions
const answersList = document.querySelector('.answers-list')

function showQuizQuestions(index) {
    /**
     * Gets the .question-heading element
     * Sets its text to the current question number and text from the questions array
     *  */ 
    const questionHeading = document.querySelector('.question-heading')
    questionHeading.textContent = `${questions[index].numb}. ${questions[index].question}`
    
    /**
     * Builds a string containing HTML for each answer choice 
     * By inserting the answers from the array into <li> tags
     */
    const answerEach = `<li class="answer">${questions[index].answers[0]}</li>
    <li class="answer">${questions[index].answers[1]}</li>
    <li class="answer">${questions[index].answers[2]}</li>
    <li class="answer">${questions[index].answers[3]}</li>`

    /**
     * Sets the innerHTML of the answersList element to the answerEch string
     * Displays the answers on the page
     */
    answersList.innerHTML = answerEach

    /**
     * The code for this part of the function is taken from Codehal's Quiz Website Youtube video
     * Loops through all elements with class "answer" and attaches a click handler to each one
     */
    const answer = document.querySelectorAll('.answer');
    for(let i = 0; i < answer.length; i++) {
        answer[i].setAttribute('onclick', 'answerSelected(this)');
    }
}

/**
 * The answerSelected function code is taken from Codehal's Quiz Website Youtube video
 * Gets the user's selected answer text from the clicked element
 * Gets the correct answer for the current question from the questions array
 * Checks if user answer matches correct answer
 */
function answerSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionsCount].correctAnswer;
    let allAnswers = answersList.children.length;
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
    } else {
        answer.classList.add('wrong');

        //Auto selects the correct answer if the user has selected incorrect one
        for (let i = 0; i < allAnswers; i++) {
            if (answersList.children[i].textContent === correctAnswer) {
                answersList.children[i].setAttribute('class', 'answer correct');
            }
        }
    }
    //Disables other answers if the user has selected
    for (let i = 0; i < allAnswers; i++) {
        answersList.children[i].classList.add('disabled');
    }
    //Enables to go to the next question if user has selected
    nextBtn.classList.add('active');
}

//Changes the question number from 1 to 15
function questionIndicator(index) {
    const questionScore = document.querySelector('.question-score');
    questionScore.textContent = `Questions ${index} / ${questions.length}`
}

//Shows user their score
const scoreBox = document.querySelector('.score-box');

function showQuizResultBox() {
    quizBox.classList.remove('active')
    scoreBox.classList.add('active')
}
