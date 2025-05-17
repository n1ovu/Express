const computerChoisceDisplay = document.querySelector("#computer-choice")
const userChoiceDisplay = document.querySelector("#user-choice")
const resultDisplay = document.querySelector("#result")
const possibleChoices = document.querySelectorAll("button")
let computerChoice
let userChoice
possibleChoices.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
  })
})

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length)

  if (randomNumber === 0) {
    computerChoice = "rock"
  }
  if (randomNumber === 1) {
    computerChoice = "paper"
  }
  if (randomNumber === 2) {
    computerChoice = "scissors"
  }

  computerChoisceDisplay.innerHTML = computerChoice
  getResult()
}

function getResult() {
  if (computerChoice === userChoice) {
    resultDisplay.innerHTML = "It's a Draw!"
  } else if (computerChoice === "rock") {
    if (userChoice === "paper") {
      resultDisplay.innerHTML = "You win!"
    } else {
      resultDisplay.innerHTML = "You lose!"
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      resultDisplay.innerHTML = "You win!"
    } else {
      resultDisplay.innerHTML = "You lose!"
    }
  } else if (computerChoice === "paper") {
    if (userChoice === "scissors") {
      resultDisplay.innerHTML = "You win!"
    } else {
      resultDisplay.innerHTML = "You lose!"
    }
  }
}
