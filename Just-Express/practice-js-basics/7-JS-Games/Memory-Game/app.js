const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "chesseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "chesseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
let resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img")
    card.setAttribute("src", "images/blank.png")
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipCard)
    gridDisplay.append(card)
  }
}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll("img")
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  if (optionOneId == optionTwoId) {
    alert("You have clicked the same card!")
    cardsChosen.pop()
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!")
    cards[optionOneId].setAttribute("src", "images/white.png")
    cards[optionOneId].removeEventListener("click", flipCard)
    cards[optionTwoId].setAttribute("src", "images/white.png")
    cards[optionTwoId].removeEventListener("click", flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png")
    cards[optionTwoId].setAttribute("src", "images/blank.png")
    alert("Sorry try again!")
  }
  resultDisplay.textContent = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you've found them all!"
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id")
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)

  this.setAttribute("src", cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
  }
}
