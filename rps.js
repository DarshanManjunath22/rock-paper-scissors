let humanScore=0, computerScore=0;
alert("Welcome to the game of Rock, Paper, Scissors!");
playGame();

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




function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Draw!\nScores → You: " + humanScore + " | Computer: " + computerScore);
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        alert("Computer wins, paper beats rock\nScores → You: " + humanScore + " | Computer: " + computerScore);
    } 
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        alert("Computer wins, scissors beat paper\nScores → You: " + humanScore + " | Computer: " + computerScore);
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        alert("Computer wins, rock beats scissors\nScores → You: " + humanScore + " | Computer: " + computerScore);
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        alert("You win, paper beats rock\nScores → You: " + humanScore + " | Computer: " + computerScore);
    } 
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        alert("You win, scissors beat paper\nScores → You: " + humanScore + " | Computer: " + computerScore);
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        alert("You win, rock beats scissors\nScores → You: " + humanScore + " | Computer: " + computerScore);
    }
}

function playGame(){
    for(let i = 0; i<5; i++){
        let humanChoice =getHumanChoice(), computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
}