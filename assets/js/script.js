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
    const questionHeading = document.querySelector('.question-heading')
    questionHeading.textContent = `${questions[index].numb}. ${questions[index].question}`

    const answerEach = `<li class="answer">${questions[index].answers[0]}</li>
    <li class="answer">${questions[index].answers[1]}</li>
    <li class="answer">${questions[index].answers[2]}</li>
    <li class="answer">${questions[index].answers[3]}</li>`

    answersList.innerHTML = answerEach

    /**
     * The code for this part of the function is taken from Codehal's Quiz Website Youtube video
     * Loops through all elements with class "answer" and attaches aclick handler to each one
     */
    const answer = document.querySelectorAll('.answer');
    for(let i = 0; i < answer.length; i++) {
        answer[i].setAttribute('onclick', 'answerSelected(this)');
    }
}