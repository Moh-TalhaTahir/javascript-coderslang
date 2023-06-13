var opened = [];
var matched = 0;
var moves = 0;
let moveCounter = document.querySelector(".moves-counter span");
let modalWindow = document.querySelector(".modal");
let tryAgainButton = document.querySelector("#try-again");
const cards = document.querySelectorAll(".card");

function init() {
  let shuffledCards = [];
  let field = document.querySelector(".field");
  matched = 0;
  moves = 0;

  cards.forEach((card) => {
    card.addEventListener("click", cardClickHandler);
    card.classList.remove("match");
  });

  shuffledCards = shuffle([...cards]);
  shuffledCards.forEach((card) => {
    field.appendChild(card);
  });

  moveCounter.textContent = moves;
  modalWindow.style.display = "none";
}

function cardClickHandler() {
  let card = this;
  card.classList.add("opened");
  opened.push(card);
  addMove();
  if (opened.length === 2) {
    if (opened[0].getAttribute("type") === opened[1].getAttribute("type")) {
      opened[0].classList.add("match");
      opened[1].classList.add("match");
      matched += 2;
      if (matched === 16) {
        showModal();
      }
      opened = [];
    } else {
      cards.forEach((card) => {
        card.removeEventListener("click", cardClickHandler);
      });
      setTimeout(() => {
        opened.forEach((card) => {
          card.classList.remove("opened");
        });
        cards.forEach((card) => {
          card.addEventListener("click", cardClickHandler);
        });
        opened = [];
      }, 1000);
    }
  }
}

function shuffle(array) {
  // Create a copy of the input array to avoid modifying the original array
  const shuffledArray = array.slice();

  // Define a random comparison function
  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  // Use the sort() method with the random comparison function
  shuffledArray.sort(compareRandom);

  // Return the shuffled array
  return shuffledArray;
}

function addMove() {
  moves++;
  moveCounter.textContent = moves;
}

function showModal() {
  let congratulationMessageCounter = document.querySelector(
    ".congratulation-message span"
  );
  congratulationMessageCounter.textContent = moves;
  modalWindow.style.display = "block";
}

init();

tryAgainButton.addEventListener("click", (e) => {
  init();
});
