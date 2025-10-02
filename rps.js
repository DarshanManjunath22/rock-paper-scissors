let humanScore=0, computerScore=0;
alert("Welcome to the game of Rock, Paper, Scissors!");



function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
  let num = getRandomNum(1, 20);  
  
  if (num % 3 == 0) {
    return "rock";
  } 
  else if (num%3!=0 && num % 2 == 0) {
    return "paper";
  } 
  else {
    return "scissors";
  }
}

function getHumanChoice(){
  let userInput = prompt("rock, paper, scissors ?");
  userInput = userInput.toLowerCase();
  return userInput;
}



function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    displaydiv.textContent = `Draw! You both chose ${playerChoice}\n Your score = ${humanScore}\n Computer score = ${computerScore}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    displaydiv.textContent = `You win! ${playerChoice} beats ${computerChoice}\n Your score = ${humanScore}\n Computer score = ${computerScore}`;
    
  } else {
    computerScore++;
    displaydiv.textContent = `Computer win! ${computerChoice} beats ${playerChoice}\n Your score = ${humanScore}\n Computer score = ${computerScore}`;
    
  }

  
  if(humanScore>5 || computerScore>5){
    if(humanScore>computerScore)
    alert("You Won! Thanks for playing");
    else if(humanScore===computerScore)
    alert("You Won! Thanks for playing");
    else{
    alert("Computer Won! Thanks for playing");
    }
    humanScore=0;
    computerScore=0;
  }
  

}



/* ui feature */

const rbtn = document.createElement("button");
rbtn.textContent="Rock";
rbtn.addEventListener("click", () => playRound("rock"))

const pbtn = document.createElement("button");
pbtn.textContent="Paper";
pbtn.addEventListener("click", () => playRound("paper"))

const sbtn = document.createElement("button");
sbtn.textContent="Scissors";
sbtn.addEventListener("click", () => playRound("scissors"))

let displaydiv = document.createElement("div");
displaydiv.style.whiteSpace = "pre";
document.body.appendChild(rbtn);
document.body.appendChild(pbtn);
document.body.appendChild(sbtn);
document.body.appendChild(displaydiv);
