// Generating two variable randomly
// Math.ceil or ParseInt are two ways to get an integer instead of a float
var x = Math.ceil(Math.random()*100),
 x2 = parseInt(Math.random()*10), result=0, reponse=0;
const aEL = document.getElementById("a");
aEL.innerHTML=x; //printing the variable into the html element
const bEL = document.getElementById("b");
bEL.innerHTML= x2;

//console.log("the 1st numb is", x)
//console.log("the 2st numb is", x2)

correctAns=x*x2;

//console.log("the correct answer is ", correctAns);
const inputEL=document.getElementById("input");
const formEL=document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = localStorage.getItem("score");
//converting the score from string to integer 
score=+score;

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;


formEL.addEventListener("submit", () => {
  const userAns = +inputEL.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
// we use this function to store the old value of the score
// PS: the brwoser only allow the storage of strings => 
//we can store an integer as a string by adding "+" unary +
function updateLocalStorage() {
  //localStorage.setItem("score", JSON.stringify(score));
  localStorage.setItem("score", +score);
}