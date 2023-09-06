//Enables user to start quiz
const quizBox = document.querySelector('.quiz-box')

function startQuiz() {

    const startBtn = document.querySelector('.start-btn')

    startBtn.onclick = () => {
        quizBox.classList.add('active')
    }
}