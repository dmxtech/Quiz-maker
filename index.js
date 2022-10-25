//Get element by ID
const timer = document.getElementById("timer");
const highscore = document.getElementById("highscores");
const start = document.getElementById("start");
const startbtn = document.getElementById("startbtn");
const quiz = document.getElementById("quiz");
const renderquestions = document.getElementById("questions");
const BtnA = document.getElementById("A");
const BtnB = document.getElementById("B");
const BtnC = document.getElementById("C");
const BtnD = document.getElementById("D");
const hsname = document.getElementById("hsname");
const finalscore = document.getElementById("finalscore");
const answer = document.getElementById("answer");


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
    var seconds = Math.floor((timeleft % (10 * 60)) / 10);
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
        correctAnswer: "A"
    },
    {
        question: "What is used for front end of a web page?",
        choiceA: "Python",
        choiceB: "HTML, CSS",
        choiceC: "Doordash",
        choiceD: "Bootstrap",
        correctAnswer: "B"
    },
    {
        question: "What HTML tags are JavaScript code wrapped in?",
        choiceA: "&lt;div&gt;",
        choiceB: "&lt;link&gt;",
        choiceC: "&lt;head&gt;",
        choiceD: "&lt;script&gt;",
        correctAnswer: "D"
    },
    {
        question: "Where do you maintain your repositories in the course?",
        choiceA: "my pc",
        choiceB: "git lab",
        choiceC: "my usb",
        choiceD: "Github, my pc & gitlab",
        correctAnswer: "D"
    },
    {
        question: "What is the best search engine on the internet?",
        choiceA: "Google",
        choiceB: "Facebook",
        choiceC: "Tiktok",
        choiceD: "Ford",
        correctAnswer: "A"
    },
    {
        question: "How do you upload your files to git hub on the terminal?",
        choiceA: "email git hub",
        choiceB: "send whatsapp to git hub",
        choiceC: "git init - git add - git commit",
        choiceD: "call git hub",
        correctAnswer: "C"
    },
    {
        question: "What does HTML stand for?",
        choiceA: "Hyper Trainer Marking Language",
        choiceB: "Hyper Text Marketing Language",
        choiceC: "Hyper Text Markup Language",
        choiceD: "Hyper Text Markup Leveler",
        correctAnswer: "C"
    },

];
const Finalquestionsi = questions.length;
var score = 0;
var indexquestions = 0;
const currentquestion = questions[indexquestions];

// function to create the questions & answers
function generateQuestion() {
    console.log("finalquestionsindex", Finalquestionsi);
    console.log("indexquest", indexquestions);
    console.log("currentquestion", currentquestion);
    console.log("question", currentquestion.question);



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
    let answers = answer.path[0].id;
    //const selRange = answer.currentquestion;
    correct = currentquestion.correctAnswer;
    console.log("answers", answer.path[0].id);
    console.log("correct", correct);

    if (indexquestions === Finalquestionsi) {
        return showScore();
    }
    if (answers === correct) {
        score++;
        alert("That is the correct answer");
        indexquestions++;
        generateQuestion();
        //alert window of incorrect answer
    } else if (answers !== correct) {
        alert("The answer is WROOOOOONG!!")
        indexquestions++;
        generateQuestion();

    } else {
        showScore();
    }
}
//highscore.addEventListener("click", showScore());
function showScore() {


    clearInterval(timerfunct);
    hsname.value = "";
    finalscore.innerHTML = "Your score is: " + score + " out of " + questions.length;
    if (hsname.value === "") {
        alert("Write your name");
        return false;
    } else {
        var savedHs = JSON.parse(localStorage.getItem("savedhs")) || [];
        const currentUser = initials.value.trim();
        var newHs = {
            name: currentUser,
            score: score
        };
        savedHs.push(newHs);
        localStorage.setItem("savedHs", JSON.stringify(savedHs));
        generatehs();
    }
}



start.addEventListener("click", startQuiz);






