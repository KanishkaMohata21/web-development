const _question = document.getElementById('question');
const _options = document.querySelector('.opt ol');
const _checkBtn = document.getElementById('Check');
const _result = document.getElementById('result');
const _score = document.getElementById('score');

let correctAnswer = "";
let score = 0;
let questionNumber = 0;
const maxQuestions = 10;

async function loadQuestion() {
    try {
        const APIUrl = 'https://opentdb.com/api.php?amount=1';
        const response = await fetch(APIUrl);
        const data = await response.json();
        if(data.results.length > 0) {
            showQuestion(data.results[0]);
        } else {
            throw new Error('No questions found in API response');
        }
    } catch (error) {
        console.error("Error loading question:", error);
    }
}

function eventListeners() {
    _checkBtn.addEventListener('click', checkAnswer);
    _options.addEventListener('click', selectOption);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
});

function showQuestion(data) {
    _checkBtn.disabled = false;
    correctAnswer = data.correct_answer;
    _question.innerHTML = data.question;
    const optionsList = [...data.incorrect_answers, data.correct_answer];
    shuffleArray(optionsList);
    _options.innerHTML = optionsList.map((option, index) => {
        return `<li class="opts">${index + 1}. <span>${option}</span></li>`;
    }).join('');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function selectOption(event) {
    const selectedOption = event.target.closest('li');
    if (!selectedOption || selectedOption.classList.contains('selected')) return;
    
    const selectedAnswer = selectedOption.textContent.trim();
    const options = Array.from(_options.querySelectorAll('li'));
    options.forEach(option => option.classList.remove('selected'));
    
    selectedOption.classList.add('selected');
}

function checkAnswer() {
    const selectedOption = _options.querySelector('.selected');
    if (!selectedOption) {
        _result.textContent = "Please select an option!";
        return;
    }
    const selectedAnswer = selectedOption.querySelector('span').textContent.trim();
    if (selectedAnswer === correctAnswer) {
        score++;
        _result.textContent = "Correct!";
    } else {
        _result.textContent = `Incorrect! Correct answer: ${correctAnswer}`;
    }
    questionNumber++;
    _score.textContent = `SCORE: ${score}`;
    setTimeout(loadNextQuestion, 2000); 
}


function loadNextQuestion() {
    if (questionNumber < maxQuestions) {
        _result.textContent = "Please select an option"; 
        loadQuestion();
    } else {
        _result.textContent = `Quiz completed! Final Score: ${score}`;
        _checkBtn.disabled = true;
    }
}


