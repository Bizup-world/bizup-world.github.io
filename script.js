let correctAnswers = 0;

function startQuiz() {
    let welcomeScreen = document.getElementById('welcome-screen');
    let quiz1 = document.getElementById('quiz-1');
    if(welcomeScreen && quiz1) {
        welcomeScreen.style.display = 'none';
        quiz1.style.display = 'block';
    }
}

function checkAnswer(quiz, option) {
    let correctOption;
    if (quiz === 'quiz1') {
        correctOption = 'option1';
    } else if (quiz === 'quiz2') {
        correctOption = 'option4';
    } else if (quiz === 'quiz3') {
        correctOption = 'option3';
    }

    let selectedOption = document.getElementById(quiz + '-' + option);
    let correctAnswer = document.getElementById(quiz + '-' + correctOption);
    let message = document.getElementById('message-' + quiz);
    if(selectedOption && correctAnswer && message) {
        if (option === correctOption) {
            selectedOption.classList.add('correct');
            message.innerText = 'मुबारक हो! आपने सही जवाब चुना है.';
            correctAnswers++;
        } else {
            selectedOption.classList.add('incorrect');
            correctAnswer.classList.add('correct');
            message.innerText = 'माफ़ कीजिएगा! आपने गलत जवाब चुना है . सही जवाब हरे रंग मे है';
        }
        // Disable all options after one is selected
        for (let i = 1; i <= 4; i++) {
            let optionButton = document.getElementById(quiz + '-option' + i);
            if (optionButton) {
                optionButton.disabled = true;
            }
        }
    }
}

function nextQuiz(currentQuiz, nextQuiz) {
    let currentQuizElement = document.getElementById(currentQuiz);
    let nextQuizElement = document.getElementById(nextQuiz);
    if(currentQuizElement && nextQuizElement) {
        currentQuizElement.style.display = 'none';
        nextQuizElement.style.display = 'block';
    }
}

function showResult() {
    let quiz3 = document.getElementById('quiz-3');
    let resultPage = document.getElementById('result-page');
    if(quiz3 && resultPage) {
        quiz3.style.display = 'none';
        resultPage.style.display = 'block';

        let winnerVariant = document.getElementById('winner-variant');
        let losingVariant = document.getElementById('losing-variant');
        if(winnerVariant && losingVariant) {
            if (correctAnswers >= 2) {
                winnerVariant.style.display = 'block';
            } else {
                losingVariant.style.display = 'block';
            }
        }
    }
}

function uploadPhoto() {
    let uploadMessage = document.getElementById('upload-message');
    if(uploadMessage) {
        uploadMessage.innerText = 'Photo upload karne ke liye Dhanyewad Apko Whatsapp pe 2 din mai recharge code mil jayega';
    }
}