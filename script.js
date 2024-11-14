const quizData = [
    {
        question: 'Who is the president of Nigeria?',
        a: 'Tinubu',
        b: 'Atiku',
        c: 'Peter Obi',
        d: 'Shettima',
        correct: 'a'
    }, 
    {
        question: 'How old is Tinubu?',
        a: '5',
        b: '18',
        c: '99',
        d: '55',
        correct: 'c'
    }, 
    {
        question: 'Who is the best lyricist?',
        a: 'Wizkid',
        b: 'Burna Boy',
        c: 'Buju',
        d: 'Davido',
        correct: 'b'
    }, 
    {
        question: 'Who is the president of US?',
        a: 'Joe Biden',
        b: 'Donald Trump',
        c: 'P Diddy',
        d: 'Odumodu Blvack',
        correct: 'a'
    }, 
    {
        question: 'Which one of these phones is outdated?',
        a: 'Iphone 11',
        b: 'Iphone 15 pro max',
        c: 'Iphone 13',
        d: 'Iphone 4',
        correct: 'd' 
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
 
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;  
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered corrrectly at ${score}/${quizData.length} questions.</h2>
             <button onclick="location.reload()">Reload</button>
             `;
        }
    }   
});