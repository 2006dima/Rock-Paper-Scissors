// variables
let computer = document.querySelectorAll(".computer td");
let player = document.querySelectorAll(".player td");
let imageElements = document.querySelectorAll(".column_image_element");
let resetButton = document.querySelector(".reset-button");
let autoPlayButton = document.querySelector(".autoplay-button");
let computerImages = document.querySelectorAll(".noevents");
let compOutOf = "";
let patentPlayerMove = "";
let playWithKey = document.querySelectorAll(".play-with-key");
let rpcButtons = document.querySelector(".rpc-buttons");
let btn = document.createElement("button");
// functions

function getComputerChoice(playerSelection, computerSelection) {
  let computerMove = "";
  let playerMove = playerSelection;
  patentPlayerMove = playerMove;
  if (computerSelection <= 3.3) {
    computerMove = "Rock";
  } else if (computerSelection <= 6.6) {
    computerMove = "Paper";
  } else if (computerSelection <= 10) {
    computerMove = "Scissors";
  }
  compOutOf = computerMove;

  if (playerMove === computerMove) {
    document.getElementById(
      "result"
    ).innerText = `Player(${playerMove}) Tie Computer(${computerMove})`;
    player[2].innerText++;
    computer[2].innerText++;
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    document.getElementById(
      "result"
    ).innerText = `Player(${playerMove}) wins against Computer(${computerMove})`;
    player[0].innerText++;
    computer[1].innerText++;
  } else {
    document.getElementById(
      "result"
    ).innerText = `Computer wins(${computerMove}) against Player (${playerMove})`;
    player[1].innerText++;
    computer[0].innerText++;
  }
}
function ifEquals() {
  imageElements.forEach((image) => {
    image.addEventListener("click", (e) => {
      if (
        compOutOf === "Rock" ||
        compOutOf === "Paper" ||
        compOutOf === "Scissors"
      ) {
        if (compOutOf === "Rock") {
          computerImages[0].style.backgroundColor = "rgba(0, 0, 0, 0.247)";
        } else if (e.key !== "r" || e.key !== "R") {
          computerImages[0].style.backgroundColor = "rgba(0, 0, 0 ,0)";
        }
        if (compOutOf === "Paper") {
          computerImages[1].style.backgroundColor = "rgba(0, 0, 0, 0.247)";
        } else if (e.key !== "p" || e.key !== "P") {
          computerImages[1].style.backgroundColor = "rgba(0, 0, 0 ,0)";
        }
        if (compOutOf === "Scissors") {
          computerImages[2].style.backgroundColor = "rgba(0, 0, 0, 0.247)";
        } else if (e.key !== "s" || e.key !== "S") {
          computerImages[2].style.backgroundColor = "rgba(0, 0, 0 ,0)";
        }
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if (
      compOutOf === "Rock" ||
      compOutOf === "Paper" ||
      compOutOf === "Scissors"
    ) {
      if (compOutOf === "Rock") {
        computerImages[0].style.backgroundColor = "rgba(0, 0, 0, 0.247)";
      } else if (e.key !== "r" || e.key !== "R") {
        computerImages[0].style.backgroundColor = "rgba(0, 0, 0 ,0)";
      }
      if (compOutOf === "Paper") {
        computerImages[1].style.backgroundColor = "rgba(0, 0, 0, 0.247)";
      } else if (e.key !== "p" || e.key !== "P") {
        computerImages[1].style.backgroundColor = "rgba(0, 0, 0 ,0)";
      }
      if (compOutOf === "Scissors") {
        computerImages[2].style.backgroundColor = "rgba(0, 0, 0, 0.247)";
      } else if (e.key !== "s" || e.key !== "S") {
        computerImages[2].style.backgroundColor = "rgba(0, 0, 0 ,0)";
      }
    }
  });
}
ifEquals();
function updateComputerSelect() {
  let computerSelect = Math.random() * 10;
  return (computerSelect = Math.random() * 10);
}

imageElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    getComputerChoice(e.target.alt, updateComputerSelect());
  });
  element.addEventListener("click", (e) => {
    element.classList.add("bordercolor");
  });
});
function removeClassOnKeyUp(e) {
  if (e.key === "r" || e.key === "R") {
    playWithKey[0].classList.remove("clicked");
    imageElements[0].classList.remove("clicked");
  } else if (e.key === "p" || e.key === "P") {
    playWithKey[1].classList.remove("clicked");
    imageElements[1].classList.remove("clicked");
  } else if (e.key === "s" || e.key === "S") {
    playWithKey[2].classList.remove("clicked");
    imageElements[2].classList.remove("clicked");
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "R" || e.key === "r") {
    getComputerChoice("Rock", updateComputerSelect());
    playWithKey[0].classList.add("clicked");
    imageElements[0].classList.add("clicked");
    document.addEventListener("keyup", removeClassOnKeyUp);
  } else if (e.key === "P" || e.key === "p") {
    getComputerChoice("Paper", updateComputerSelect());
    playWithKey[1].classList.add("clicked");
    imageElements[1].classList.add("clicked");
    document.addEventListener("keyup", removeClassOnKeyUp);
  } else if (e.key === "S" || e.key === "s") {
    getComputerChoice("Scissors", updateComputerSelect());
    playWithKey[2].classList.add("clicked");
    document.addEventListener("keyup", removeClassOnKeyUp);
    imageElements[2].classList.add("clicked");
    document.addEventListener("keyup", removeClassOnKeyUp);
  }
});
resetButton.addEventListener("click", () => {
  player.forEach((text) => {
    text.innerText = 0;
  });
  computer.forEach((text) => {
    text.innerText = 0;
  });
  document.getElementById("result").innerText = "";
});
function autoPlay() {
  let rockpaperscissorsarr = ["Rock", "Paper", "Scissors"];
  const randomElement =
    rockpaperscissorsarr[
      Math.floor(Math.random() * rockpaperscissorsarr.length)
    ];
  getComputerChoice(randomElement, updateComputerSelect());
}
btn.innerText = "Stop";
btn.classList.add("reset-autoplay");
rpcButtons.appendChild(btn);
autoPlayButton.addEventListener("click", (e) => {
  let auto = setInterval(autoPlay, 1000);
  auto;
  btn.addEventListener("click", () => {
    clearInterval(auto);
    document.getElementById("result").innerText = "";
  });
});

// other
// if (playerMove === "Rock") {
//   if (computerMove === "Paper") {
//     console.log("Player loses against Computer");
//   } else if (computerMove === "Scissors") {
//     console.log("Player wins against Computer");
//   }
// } else if (playerMove === "Paper") {
//   if (computerMove === "Rock") {
//     console.log("Player wins against Computer");
//   } else if (computerMove === "Scissors") {
//     console.log("Player loses against Computer");
//   }
// } else if (playerMove === "Scissors") {
//   if (computerMove === "Rock") {
//     console.log("Player loses against Computer");
//   } else if (computerMove === "Paper") {
//     console.log("Player wins against Computer");
//   }
// }
//  if (computerMove === "Rock") {
//   if (playerMove === "Paper") {
//     console.log("Computer loses against Player");
//   } else if (playerMove === "Scissors") {
//     console.log("Computer wins against Player");
//   }
// } else if (computerMove === "Paper") {
//   if (playerMove === "Rock") {
//     console.log("Computer wins against Player");
//   } else if (playerMove === "Scissors") {
//     console.log("Computer loses against Player");
//   }
// } else if (computerMove === "Scissors") {
//   if (playerMove === "Rock") {
//     console.log("Computer loses against Player");
//   } else if (playerMove === "Paper") {
//     console.log("Computer wins against Player");
//   }
// }
