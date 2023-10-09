
/*
const menuBtn = document.querySelector('.menuBtn')
const nav = document.querySelector('.nav')

menuBtn.addEventListener('click', ()=> {
    nav.classList.toggle('active')
}) */
 
const pronounsQuestions = [
    {
        question: "Who is Kate? Kate is my friend. ____ is a teacher.",
        answers: [
            { text: "Her", correct: false },
            { text: "He", correct: false },
            { text: "She", correct: true },
            { text: "His", correct: false }
        ]
    },
    {
        question: "Who is this man? This is Henry. _____ is my boss.",
        answers: [
            { text: "His", correct: false },
            { text: "Her", correct: false },
            { text: "He", correct: true },
            { text: "She", correct: false }
        ]
    },
    {
        question: "Do you know Tom? Yes, I know _____.",
        answers: [
            { text: "he", correct: false },
            { text: "she", correct: false },
            { text: "her", correct: false },
            { text: "him", correct: true }
        ]
    },
    {
        question: "I don't see them. Do _____ see them?",
        answers: [
            { text: "you", correct: true },
            { text: "I", correct: false },
            { text: "they", correct: false },
            { text: "me", correct: false }
        ]
    },
    {
        question: "We are going to the cinema. Do you want to come with _____?",
        answers: [
            { text: "us", correct: true },
            { text: "them", correct: false },
            { text: "we", correct: false },
            { text: "you", correct: false }
        ]
    },
    {
        question: "I love this book! Did you read _____?",
        answers: [
            { text: "it", correct: true },
            { text: "he", correct: false },
            { text: "they", correct: false },
            { text: "she", correct: false }
        ]
    },
    {
        question: "Where are Tom and Kate living? _____ live next to my house.",
        answers: [
            { text: "They", correct: true },
            { text: "She", correct: false },
            { text: "He", correct: false },
            { text: "We", correct: false }
        ]
    },
    {
        question: "Where's the cat? _____ is in the garden.",
        answers: [
            { text: "It", correct: true },
            { text: "Its", correct: false },
            { text: "She", correct: false },
            { text: "He", correct: false }
        ]
    },
    {
        question: "It's Mary's birthday today. I called _____ this morning.",
        answers: [
            { text: "her", correct: true },
            { text: "him", correct: false },
            { text: "she", correct: false },
            { text: "it", correct: false }
        ]
    },
    {
        question: "Amy and John are my new friends. I really like _____.",
        answers: [
            { text: "them", correct: true },
            { text: "they", correct: false },
            { text: "him", correct: false },
            { text: "her", correct: false }
        ]
    },
    {
        question: "We scored as many goals as _____.",
        answers: [
            { text: "they", correct: false },
            { text: "them", correct: true },
            { text: "us", correct: false },
            { text: "yourselves", correct: false }
        ]
    },
    {
        question: "Between you and _____ he is a liar.",
        answers: [
            { text: "I", correct: false },
            { text: "me", correct: true },
            { text: "myself", correct: false },
            { text: "mine", correct: false }
        ]
    },
    {
        question: "Let _____ who can, save her from drowning.",
        answers: [
            { text: "him", correct: false },
            { text: "his", correct: false },
            { text: "he", correct: true },
            { text: "himself", correct: false }
        ]
    },
    {
        question: "The boy _____ fell off his bicycle has hurt his leg.",
        answers: [
            { text: "who", correct: true },
            { text: "whom", correct: false },
            { text: "which", correct: false },
            { text: "whose", correct: false }
        ]
    },
    {
        question: "I have not seen the girl _____ suitcase was stolen.",
        answers: [
            { text: "whom", correct: false },
            { text: "who", correct: false },
            { text: "which", correct: false },
            { text: "whose", correct: true }
        ]
    },
    {
        question: "Seema is the maid _____ I have employed.",
        answers: [
            { text: "whom", correct: true },
            { text: "who", correct: false },
            { text: "whose", correct: false },
            { text: "which", correct: false }
        ]
    },
    {
        question: "This is the paragraph about _____ the teacher is talking.",
        answers: [
            { text: "that", correct: false },
            { text: "what", correct: false },
            { text: "which", correct: true },
            { text: "who", correct: false }
        ]
    },
    {
        question: "The letter _____ he wrote reached me late.",
        answers: [
            { text: "which", correct: true },
            { text: "what", correct: false },
            { text: "that", correct: false },
            { text: "whom", correct: false }
        ]
    },
    {
        question: "The jury has given _____ verdict.",
        answers: [
            { text: "their", correct: false },
            { text: "it", correct: false },
            { text: "them", correct: false },
            { text: "its", correct: true },
        ]
    },
    {
        question: "The Cabinet gave _____ vote.",
        answers: [
            { text: "their", correct: true },
            { text: "its", correct: false },
            { text: "it", correct: false },
            { text: "them", correct: false }
        ]
    },
    {
        question: "Each policeman and each homeguard was at _____ post.",
        answers: [
            { text: "his", correct: true },
            { text: "their", correct: false },
            { text: "its", correct: false },
            { text: "our", correct: false }
        ]
    },
    {
        question: "Either the leader or his followers did not do _____ duty.",
        answers: [
            { text: "his", correct: false },
            { text: "her", correct: false },
            { text: "its", correct: false },
            { text: "their", correct: true }
        ]
    },
    {
        question: "She and I completed _____ work.",
        answers: [
            { text: "our", correct: true },
            { text: "ours", correct: false },
            { text: "we", correct: false },
            { text: "us", correct: false }
        ]
    },
    {
        question: "Riya and _____ went to Kerela.",
        answers: [
            { text: "I", correct: true },
            { text: "myself", correct: false },
            { text: "me", correct: false },
            { text: "mine", correct: false }
        ]
    },
    {
        question: "She _____ saw the thief.",
        answers: [
            { text: "herself", correct: true },
            { text: "themselves", correct: false },
            { text: "himself", correct: false },
            { text: "itself", correct: false }
        ]
    }
];

const possesivesQuestions = [
    {
        question: 'Which sentence is correct?',
        answers: [
            { text: "Are you going to Dan and Suzie’s party?", correct: true },
            { text: "Are you going to Dan’s and Suzie’s party?", correct: false },
            { text: "Are you going to Dan and Suzies’ party?", correct: false }
        ]
    },
    {
        question: 'Can you look after the ____ rabbit while we are on holiday?',
        answers: [ 
            { text: "childrens’s", correct: false },
            { text: "childrens’", correct: false },
            { text: "children’s", correct: true }
        ]
    },
    {
        question: 'That’s not my bag. It’s my ____',
        answers: [
            { text: "brothers", correct: false },
            { text: "brother's", correct: true },
            { text: "brothers's", correct: false }
        ]
    },
    {
        question: "That’s my sisters’ bedroom. How many girls sleep in this room?",
        answers: [
            { text: "It is impossible to know", correct: false },
            { text: "One", correct: false },
            { text: "Two or more", correct: true }
        ]
    },
    {
        question: 'That’s _____ car.',
        answers: [
            { text: "Anne’s parents", correct: false },
            { text: "Annes’ parent’s", correct: false },
            { text: "Anne’s parents’", correct: true }
        ]
    },
];

const verbTenses_PastPerfectQuestions = [
    {
        question: "We _____ anything all day so we were very hungry.",
        answers: [
            { text: "had eaten", correct: false },
            { text: "hadn't eaten", correct: true },
            { text: "hadn't ate", correct: false }
        ]
    },
    {
        question: "They _____ a lot the days before, so they were ready for the exam.",
        answers: [
            { text: "had studied", correct: true },
            { text: "had study", correct: false },
            { text: "hadn't studied", correct: false }
        ]
    },
    {
        question: '_____ you _____ to that restaurant before?',
        answers: [
            { text: "Had, go", correct: false },
            { text: "Had, went", correct: false },
            { text: "Had, been", correct: true }
        ]
    },
    {
        question: "We _____ never _____ a volcano before our trip.",
        answers: [
            { text: "had, see", correct: false },
            { text: "had, seen", correct: true },
            { text: "hadn't, seen", correct: false },


        ]
    },
    {
        question: 'She _____ up the kitchen by the time we arrived.',
        answers: [
            { text: "has cleaned", correct: false },
            { text: "had cleaned", correct: true },
            { text: "hadn't clean", correct: false }
        ]
    },
];


// Add a 'category' property to each question."
pronounsQuestions.forEach(question => {
    question.category = "Pronouns";
});
possesivesQuestions.forEach(question => {
    question.category = "Possesives";
});
verbTenses_PastPerfectQuestions.forEach(question => {
    question.category = "Verb Tenses: Past Perfect";
});

const combinedQuestions = [...pronounsQuestions, ...possesivesQuestions, ...verbTenses_PastPerfectQuestions];

let questions = combinedQuestions;

const quizCategoryElement = document.getElementById("quiz-category");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const numberOfQuestions = questions.length;

function selectQuestions(questions, numPronouns, numPossesives, numVerbTensesPastPerfect) {
    let selectedQuestions = [];
    let totalTestQuestions = numPronouns + numPossesives + numVerbTensesPastPerfect;

    while (selectedQuestions.length < totalTestQuestions) {
        const randomIndex = Math.floor(Math.random() * numberOfQuestions);
        const category = questions[randomIndex].category;
        if (category==='Pronouns' && numPronouns>0 && !selectedQuestions.includes(randomIndex)){
            selectedQuestions.push(randomIndex);
            numPronouns--;
        }
        else if (category==='Possesives' && numPossesives>0 && !selectedQuestions.includes(randomIndex)){
            selectedQuestions.push(randomIndex);
            numPossesives--;
        }
        else if (category==='Verb Tenses: Past Perfect' && numVerbTensesPastPerfect>0 && !selectedQuestions.includes(randomIndex)){
            selectedQuestions.push(randomIndex);
            numVerbTensesPastPerfect--;
        }
    }

    return selectedQuestions;
}

let numPronounsQuestions = 7;
let numPossesivesQuestions = 5;
let numVerbTensesPastPerfectQuestions = 3;

const selectedQuestions = selectQuestions(questions, numPronounsQuestions, numPossesivesQuestions, numVerbTensesPastPerfectQuestions);

let questionNumber = 0;
let currentQuestionIndex = selectedQuestions[questionNumber];
let score = 0;


function startQuiz() {
    quizCategoryElement.innerHTML = "Test"
    questionNumber = 0;
    currentQuestionIndex = selectedQuestions[0];
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion() {
    resetState();
    if (questionNumber < selectedQuestions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        questionNumber++;
        quizCategoryElement.innerHTML = "TEST [" + currentQuestion.category + " Question]";
        questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    } else {
        quizCategoryElement.innerHTML = "TEST:";
        questionElement.innerHTML = "";
        nextButton.style.display = "none";
    }
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showAnswers() {
    questionElement.innerHTML = "Answers and Solutions:";
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("answer-container");
        
        const questionNumber = index + 1;
        const questionText = `${questionNumber}. ${question.question}`;
        const questionElement = document.createElement("p");
        questionElement.classList.add("question-text");
        questionElement.innerText = questionText;
        questionDiv.appendChild(questionElement);

        question.answers.forEach(answer => {
            const answerElement = document.createElement("p");
            answerElement.classList.add("answer");
            if (answer.correct) {
                answerElement.classList.add("correct-answer");
            }
            answerElement.innerText = `${answer.text}`;
            questionDiv.appendChild(answerElement);
        });

        answerButtons.appendChild(questionDiv);
    });

    nextButton.style.display = "none";
}


function showScore() {
    resetState();
    const message = getFinalScoreMessage(score);  
    questionElement.innerHTML = message; 
    quizCategoryElement.innerHTML = "Test Results";
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}


function getFinalScoreMessage(score) {
    let message = "";
    const totalQuestions = selectedQuestions.length;  
    if (score === totalQuestions) {
        message = "Congratulations! You got a perfect score! You're an expert in this subject.";
    } else if (score >= 7) {
        message = `Great job! You answered ${score} out of ${totalQuestions} questions correctly. Keep up the good work!`;
    } else if (score >= 5) {
        message = `Not too bad! You got ${score} out of ${totalQuestions} questions right. Keep practicing!`;
    } else {
        message = `You got ${score} out of ${totalQuestions}. Keep practicing to improve your knowledge!`;
    }
    return message;
}


function handleNextButton() {
    if (questionNumber < selectedQuestions.length) {
        currentQuestionIndex = selectedQuestions[questionNumber];
        showQuestion();
    } else {
        showScore();
        questionNumber++;
    }
}


nextButton.addEventListener("click", () => {
    if (questionNumber <= selectedQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();















