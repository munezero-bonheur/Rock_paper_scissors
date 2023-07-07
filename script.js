const selections = document.querySelectorAll('.selection');
const resultScore = document.querySelectorAll('.result-score');
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    resultScore[0].textContent = playerScore;
    return "You win!";
  } else {
    computerScore++;
    resultScore[1].textContent = computerScore;
    return "You lose!";
  }
}


function select(e) {
  const playerSelection = e.target.dataset.selection;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
  
}

selections.forEach(selection => {
  selection.addEventListener('click', select);
});
