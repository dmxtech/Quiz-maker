//Get element by ID
const timer = document.getElementById("timer");
const highscore = document.getElementById("highscores");
const start = document.getElementById("start");
const startbtn = document.getElementById("startbtn");
const quiz = document.getElementById("quiz");
//const questions = document.getElementById("questions");
const BtnA = document.getElementById("answ1");
const BtnB = document.getElementById("answ1");
const BtnC = document.getElementById("answ1");
const BtnD = document.getElementById("answ1");

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
    document.getElementById("timer").innerHTML = seconds + "s"
    if (timeleft < 0) {
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
        correctAnswer: "a"
    },
    {
        question: "What is used for front end of a web page?",
        choiceA: "Python",
        choiceB: "HTML, CSS",
        choiceC: "Doordash",
        choiceD: "Bootstrap",
        correctAnswer: "b"
    },
    {
        question: "What HTML tags are JavaScript code wrapped in?",
        choiceA: "&lt;div&gt;",
        choiceB: "&lt;link&gt;",
        choiceC: "&lt;head&gt;",
        choiceD: "&lt;script&gt;",
        correctAnswer: "d"
    },
    {
        question: "Where do you maintain your repositories in the course?",
        choiceA: "my pc",
        choiceB: "git lab",
        choiceC: "my usb",
        choiceD: "Github, my pc & gitlab",
        correctAnswer: "d"
    },
    {
        question: "What is the best search engine on the internet?",
        choiceA: "Google",
        choiceB: "Facebook",
        choiceC: "Tiktok",
        choiceD: "Ford",
        correctAnswer: "a"
    },
    {
        question: "How do you upload your files to git hub on the terminal?",
        choiceA: "email git hub",
        choiceB: "send whatsapp to git hub",
        choiceC: "git init - git add - git commit",
        choiceD: "call git hub",
        correctAnswer: "c"
    },
    {
        question: "What does HTML stand for?",
        choiceA: "Hyper Trainer Marking Language",
        choiceB: "Hyper Text Marketing Language",
        choiceC: "Hyper Text Markup Language",
        choiceD: "Hyper Text Markup Leveler",
        correctAnswer: "c"
    },

];
const questionIndex = questions.length;
const currentquestion = 0;
// function to create the questions & answers
function generateQuizQuestion() {

    if (currentquestion === questionIndex) {
        return showScore();
    }
    const currentquestion = quizQuestions[questionIndex];
    questions.innerHTML = "<p>" + currentquestion.question + "</p>";
    BtnA.innerHTML = currentquestion.choiceA;
    BtnB.innerHTML = currentquestion.choiceB;
    BtnC.innerHTML = currentquestion.choiceC;
    BtnD.innerHTML = currentquestion.choiceD;
};






