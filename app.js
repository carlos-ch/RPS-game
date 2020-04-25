let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(word) {
  if (word === "rock") return "Rock";
  if (word === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`
  userChoice_div.classList.add('green-glow')
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);

}


function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  compScore++
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = compScore;

  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`
  userChoice_div.classList.add('red-glow')
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);

}

function tie(userChoice,computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} and ${convertToWord(computerChoice)}${smallCompWord}. It's a tie.`
  userChoice_div.classList.add('gray-glow')
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 400);

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "paperrock":
    case "scissorspaper":
    case "rockscissors":
      win(userChoice, computerChoice);

      break;
    case "paperpaper":
    case "rockrock":
    case "scissorsscissors":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("rock"));

  paper_div.addEventListener('click', () => game("paper"));

  scissors_div.addEventListener('click', () => game("scissors"));
}

main();
