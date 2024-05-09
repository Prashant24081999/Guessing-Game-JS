let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.getElementById("wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener("click", () => {
  guessesNumber();
});

function guessesNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrong.innerHTML = "Enter between 1-100";
  } else {
    numGuesses++;
    guesses.innerHTML = "No. of Guess : " + numGuesses;

    if (input.value > answer) {
      wrong.innerHTML = "Too High! Try Again.";
    } else if (input.value < answer) {
      wrong.innerHTML = "Too Low! Try Again.";
    } else {
      alert("Congratulations, You got it right");
      wrong.innerHTML = "Congratulations, You got it right";
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }
}

function resetGame() {
  numGuesses = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  console.log(answer);
  input.value = "";
  wrong.innerHTML = "";
  guesses.innerHTML = "No. of Guesses: 0";
}
