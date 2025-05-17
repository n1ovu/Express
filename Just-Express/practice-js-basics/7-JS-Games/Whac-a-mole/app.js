const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")

let result = 0
let whac
let currentTime = 60

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole")
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add("mole")
  whac = randomSquare.id
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id == whac) {
      result++
      score.textContent = result
      whac = null
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 750)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    alert(`GAME OVER! Your final score is ${result}`)
    clearInterval(timerId)
  }
}

let countDownTimerId = setInterval(countDown, 1000)
