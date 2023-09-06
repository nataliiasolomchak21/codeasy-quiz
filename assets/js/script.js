//Enables user to start quiz
const quizBox = document.querySelector('.quiz-box')

function startQuiz() {

    const startBtn = document.querySelector('.start-btn')

    startBtn.onclick = () => {
        quizBox.classList.add('active')

        showQuizQuestions(0);
    }
}

startQuiz();

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