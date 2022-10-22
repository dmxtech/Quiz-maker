//Get element by ID
const timer = document.getElementById("timer");
const highscore = document.getElementById("highscores");
const start = document.getElementById("start");
const startbtn = document.getElementById("startbtn");
const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const BtnA = document.getElementById("answ1");
const BtnB = document.getElementById("answ1");
const BtnC = document.getElementById("answ1");
const BtnD = document.getElementById("answ1");

//Todays date 
var d = new Date();
let date = d.getDay();
document.getElementById("date").innerHTML = d;
console.log(d);

//Timer function