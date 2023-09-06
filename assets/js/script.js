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
}