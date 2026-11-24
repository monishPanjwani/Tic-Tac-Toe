let svgLinkOfX = "./asset/x.svg";
let svgLinkOfO = "./asset/o.svg";
let count = 0;
let currentPlayer = svgLinkOfX;
let arr = [];
let resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", resetBoard);

function resetBoard() {
  arr = [];
  count = 0;
  document.querySelectorAll(".box img").forEach((img) => {
    img.remove();
  });
}

function checkForWinner() {
  if (count > 3) {
    // Row - Wise Checking
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
      return arr[0];
    }
    if (arr[3] === arr[4] && arr[4] === arr[5]) {
      return arr[3];
    }
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
      return arr[6];
    }

    // columns - wise checking
    if (arr[0] === arr[3] && arr[3] === arr[6]) {
      return arr[0];
    }
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
      return arr[1];
    }
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
      return arr[2];
    }

    //Diagnol checking
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
      return arr[0];
    }
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
      return arr[2];
    }
  }
}

let gettingAllTheBoxes = document.querySelector(".content");

gettingAllTheBoxes.addEventListener("click", (e) => {
  const el = e.target.closest("button")?.querySelector(".box");
  if (!el) return;

  if (el.innerHTML === "") {
    el.innerHTML = `<img src = ${currentPlayer} />`;
    count++;
    if (currentPlayer === svgLinkOfX) {
      el.value = "X";
      currentPlayer = svgLinkOfO;
    } else {
      el.value = "O";
      currentPlayer = svgLinkOfX;
    }
    arr[el.id.slice(-1) - 1] = el.value;
  }
  let winner = checkForWinner();
  if (winner) {
    alert(`is the winner : ${winner}`);
    resetBoard();
  } else if (!winner && count === 9) {
    alert(`It is a draw`);
    resetBoard();
  }
});
