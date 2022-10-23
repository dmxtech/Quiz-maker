//Get element by ID
const timer = document.getElementById("timer");
const highscore = document.getElementById("highscores");
const start = document.getElementById("start");
const startbtn = document.getElementById("startbtn");
const quiz = document.getElementById("quiz");
const renderquestions = document.getElementById("questions");
const BtnA = document.getElementById("answ1");
const BtnB = document.getElementById("answ2");
const BtnC = document.getElementById("answ3");
const BtnD = document.getElementById("answ4");



function startQuiz() {
    start.style.display = "none";
    generateQuestion();
}
//Todays date 
var timerfunct = setInterval(function () {
    var d = new Date();
    let date = d.getTime();
    document.getElementById("date").innerHTML = d;
    var now = d.getTime();
    var timeleft = date - now;
    //console.log(timeleft);
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    console.log(seconds);

    document.getElementById("timer").innerHTML = "Time left:" + seconds + "s"
    if (timeleft === 10) {
        clearInterval(timerfunct);
        document.getElementById("timer").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000)

// Question, answers & correct answers
const questions = [

    {
        question: "&lt;h1&gt;Text&lt;/h1&gt; is the correct way of making a header in HTML.",
        choiceA: "True",
        choiceB: "False &lt;p&gt;",
        choiceC: "False &lt;div&gt;",
        choiceD: "None of the above",
        correctAnswer: "answ1"
    },
    {
        question: "What is used for front end of a web page?",
        choiceA: "Python",
        choiceB: "HTML, CSS",
        choiceC: "Doordash",
        choiceD: "Bootstrap",
        correctAnswer: "answ2"
    },
    {
        question: "What HTML tags are JavaScript code wrapped in?",
        choiceA: "&lt;div&gt;",
        choiceB: "&lt;link&gt;",
        choiceC: "&lt;head&gt;",
        choiceD: "&lt;script&gt;",
        correctAnswer: "answ4"
    },
    {
        question: "Where do you maintain your repositories in the course?",
        choiceA: "my pc",
        choiceB: "git lab",
        choiceC: "my usb",
        choiceD: "Github, my pc & gitlab",
        correctAnswer: "answ4"
    },
    {
        question: "What is the best search engine on the internet?",
        choiceA: "Google",
        choiceB: "Facebook",
        choiceC: "Tiktok",
        choiceD: "Ford",
        correctAnswer: "answ1"
    },
    {
        question: "How do you upload your files to git hub on the terminal?",
        choiceA: "email git hub",
        choiceB: "send whatsapp to git hub",
        choiceC: "git init - git add - git commit",
        choiceD: "call git hub",
        correctAnswer: "answ3"
    },
    {
        question: "What does HTML stand for?",
        choiceA: "Hyper Trainer Marking Language",
        choiceB: "Hyper Text Marketing Language",
        choiceC: "Hyper Text Markup Language",
        choiceD: "Hyper Text Markup Leveler",
        correctAnswer: "answ3"
    },

];
const Finalquestionsi = questions.length;
var score = 0;
var indexquestions = 0;
var correct;
// function to create the questions & answers
function generateQuestion() {
    console.log("finalquestionsindex", Finalquestionsi);
    console.log("indexquest", indexquestions);
    if (indexquestions === Finalquestionsi) {
        return showScore();
    }
    let currentquestion = questions[indexquestions];
    console.log("currentquestion", currentquestion);
    renderquestions.innerHTML = "<p>" + currentquestion.question + "</p>";
    BtnA.innerHTML = currentquestion.choiceA;
    BtnA.addEventListener("click", reviewanswers);
    BtnB.innerHTML = currentquestion.choiceB;
    BtnB.addEventListener("click", reviewanswers);
    BtnC.innerHTML = currentquestion.choiceC;
    BtnC.addEventListener("click", reviewanswers);
    BtnD.innerHTML = currentquestion.choiceD;
    BtnD.addEventListener("click", reviewanswers);
};
function reviewanswers(answer) {

    correct = questions[0].correctAnswer;
    console.log("answers", correct);
    if (answer === correct) {
        score++;
        alert("That is the correct answer");
        indexquestions++;
        generateQuestion();
        //alert window of incorrect answer
    } else if (answer !== correct) {
        alert("WROOOOOONG!!")
        indexquestions++;
        generateQuestion();

    } else {
        showScore();
    }
}
function showScore() {
    questions.style.display = "none"
    clearInterval(timerfunct);
    initials.value = "";
    finalscore.innerHTML = "Your score is: " + score + " out of " + questions.length;
}


start.addEventListener("click", startQuiz);






