let buttons = document.querySelectorAll(".buttons");
let reset = document.querySelector(".reset");
let message = document.querySelector(".winMessage");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let count = 0;

const winningSequences = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableButtons = () => {
  for (let button of buttons) {
    button.disabled = true;
  }
};

const enableButtons = () => {
  for (let button of buttons) {
    button.disabled = false;
    button.innerText = "";
  }
};

const restartGame = () => {
  turn = "cross";
  enableButtons();
  count = 0;
  message.classList.add("hidden");
};

const checkDraw = () => {
  if (count === 9) {
    msg.innerHTML = `<h1>The game was a draw</h1>`;
    message.classList.remove("hidden");
  }
};

const displayWinner = (winner) => {
  msg.innerHTML = `<h1>Congratulations to ${winner} for winning.</h1>`;
  message.classList.remove("hidden");
};

const checkWinner = () => {
  winningSequences.forEach((winn) => {
    pos1 = buttons[winn[0]].innerText;
    pos2 = buttons[winn[1]].innerText;
    pos3 = buttons[winn[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        displayWinner(pos1);
        disableButtons();
      }
    }
  });
};

let turn = "cross";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn === "cross") {
      turn = "circle";
      button.classList.add("goodcolors");
      button.innerText = "X";
      console.log("X");
    } else {
      turn = "cross";
      button.innerText = "O";
      console.log("O");
    }
    button.disabled = true;
    count++;
    checkWinner();
    checkDraw();
  });
});

reset.addEventListener("click", restartGame);
newGame.addEventListener("click", restartGame);
