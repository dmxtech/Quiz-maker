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
const showhs = document.getElementById("showhs");
//const answer = document.getElementById("answer");

quiz.style.display = "none";
timer.style.display = "inline";
highscores.style.display = "inline";
//finalscore.style.display = "none";
function startQuiz() {
    quiz.style.display = "inline";
    finalscore.style.display = "inline";

    start.style.display = "none";

    generateQuestion();

    //Todays date 
    var timerfunct = setInterval(function () {
        // var d = ;

        let date = new Date("Jan 5, 2024 15:37:25").getTime();
        //document.getElementById("date").innerHTML = date;
        var now = new Date().getTime();
        var timeleft = date - now;
        //console.log(timeleft);
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        //console.log(seconds);
        //console.log(timeleft);

        document.getElementById("timer").innerHTML = "Time left:" + seconds + "s"
        if (seconds === 0) {
            clearInterval(timerfunct);
            //document.getElementById("timer").innerHTML = ""
            document.getElementById("timer").innerHTML = "TIME IS UP!!";
            start.style.display = "none";
            quiz.style.display = "none";


        }
    }, 1000)
}
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
    // {
    //     question: "What HTML tags are JavaScript code wrapped in?",
    //     choiceA: "&lt;div&gt;",
    //     choiceB: "&lt;link&gt;",
    //     choiceC: "&lt;head&gt;",
    //     choiceD: "&lt;script&gt;",
    //     correctAnswer: "D"
    // },
    // {
    //     question: "Where do you maintain your repositories in the course?",
    //     choiceA: "my pc",
    //     choiceB: "git lab",
    //     choiceC: "my usb",
    //     choiceD: "Github, my pc & gitlab",
    //     correctAnswer: "D"
    // },
    // {
    //     question: "What is the best search engine on the internet?",
    //     choiceA: "Google",
    //     choiceB: "Facebook",
    //     choiceC: "Tiktok",
    //     choiceD: "Ford",
    //     correctAnswer: "A"
    // },
    // {
    //     question: "How do you upload your files to git hub on the terminal?",
    //     choiceA: "email git hub",
    //     choiceB: "send whatsapp to git hub",
    //     choiceC: "git init - git add - git commit",
    //     choiceD: "call git hub",
    //     correctAnswer: "C"
    // },
    // {
    //     question: "What does HTML stand for?",
    //     choiceA: "Hyper Trainer Marking Language",
    //     choiceB: "Hyper Text Marketing Language",
    //     choiceC: "Hyper Text Markup Language",
    //     choiceD: "Hyper Text Markup Leveler",
    //     correctAnswer: "C"
    // },

];
let Finalquestionsi = questions.length;
let score = 0;
let indexquestions = [0];
let currentquestion = questions[indexquestions];

// function to create the questions & answers
function generateQuestion() {
    console.log("finalquestionsindex", Finalquestionsi);
    console.log("indexquest", indexquestions);
    console.log("questions", questions[1]);
    console.log("currentquestion", currentquestion);
    console.log("question", currentquestion.question);

    //let i, len, text;
    // for (i = 0, len = currentquestion.length, text = ""; i < len; i++) {
    if (indexquestions === Finalquestionsi) {

        return showScore();
    }

    renderquestions.innerHTML = "<p>" + questions[indexquestions].question + "</p>";



    BtnA.innerHTML = questions[indexquestions].choiceA;
    BtnA.addEventListener("click", reviewanswers);
    BtnB.innerHTML = questions[indexquestions].choiceB;
    BtnB.addEventListener("click", reviewanswers);
    BtnC.innerHTML = questions[indexquestions].choiceC;
    BtnC.addEventListener("click", reviewanswers);
    BtnD.innerHTML = questions[indexquestions].choiceD;
    BtnD.addEventListener("click", reviewanswers);


};
function reviewanswers(answer) {
    let answers = answer.path[0].id;
    //const selRange = answer.currentquestion;
    correct = questions[indexquestions].correctAnswer;
    console.log("answers", answer.path[0].id);
    console.log("correct", correct);


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

    quiz.style.display = "none";
    //clearInterval(timerfunct);
    let scorename;
    let currentuser = prompt("GAMEOVER , Please enter your name:", "Harry Potter");


    finalscore.innerHTML = "Your score is: " + score + " out of " + questions.length;


    if (currentuser == null || currentuser == "") {
        scorename = "User cancelled the prompt.";
    } else {
        scorename = "Hello " + currentuser + "! Thanks for your answers";
    }
    console.log("currentuser", currentuser);
    console.log("finalscore", score);
    console.log("hsname", hsname);
    hsname.innerHTML = scorename;

    const scoredata = {
        name: currentuser,
        score: score
    };
    const highScores = JSON.parse(localStorage.getItem(scoredata[0])) ?? [];
    console.log("scoredata", scoredata);
    console.log("highScores", highScores);
    highScores.push(scoredata);
    //localStorage.setItem(currentuser, score);
    localStorage.setItem('scoredata', JSON.stringify(scoredata));
    getScore();
}

function getScore() {

    var highscores = JSON.parse(localStorage.getItem('scoredata')) ?? [];
    showhs.innerHTML = highscores;
    console.log("highscore", highscores);
    for (i = 0; i < highscores.length; i++) {
        var scorespan = document.createElement("li");
        console.log("scorespan", scorespan);
        scorespan.textContent = highscores[i].name;
        console.log("highscores[i]", highscores[i]);
        showhs.appendChild(scorespan);
        //console.log("scoredata", scoredata);

        //console.log("viewhs", viewhs);
    }
}
highscore.addEventListener("click", getScore);
start.addEventListener("click", startQuiz);

//todo fix push on showscore
//todo render highscores on showhighscores/ showsh



//     const scoredata = { currentuser, score };
    //     const NO_OF_HIGH_SCORES = 10;
    //     const HIGH_SCORES = 'highScores';
    //     const highScoreString = localStorage.getItem(HIGH_SCORES);
    //     const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    //   const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
    //     if (score > lowestScore) {
    //         saveHighScore(score, highScores); // TODO
    //         showHighScores(); // TODO
    //     }









// if (hsname.value === "") {
//     alert("Write your name in the box");
//     return false;
// } else {
//     var savedHs = JSON.parse(localStorage.getItem("savedhs")) || [];
//     const currentUser = initials.value.trim();
//     var newHs = {
//         name: currentUser,
//         score: score
//     };
//     savedHs.push(newHs);
//     localStorage.setItem("savedHs", JSON.stringify(savedHs));
//     generatehs();
// }
//}
