let userScore = 0;
let compScore = 0;

//below function will update the score in the gray boxes
const displayScore = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("user score updated , current user score =", userScore);
    const userscore = document.querySelector("#user-score");
    userscore.innerText = userScore;
    console.log(userScore); // for debugging purposes only
  } else {
    compScore++;
    const compscore = document.getElementById("comp-score");
    compscore.innerText = compScore;
    console.log("computer score updated ,current computer score =", compScore); // for debugging purposes only
  }
};

// this function below will generate random choice from the computer side and return it
const generateCompChoice = () => {
  const array = ["stone", "paper", "scissor"];
  const randomchoice = Math.floor(Math.random() * array.length); //array length is counted from 1 , index is counted from 0
  return array[randomchoice];
};

const drawGame = () => {
  console.log("DRAW");
}; // just to print if the game is draw

//below function will display each time if the user won or lost
const showWinner = (userWin) => {
  const msgbox = document.getElementById("msg-div");
  msgbox.style.display = "block"; // showing the message box

  // Hide the message box after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    msgbox.style.display = "none"; // hiding the message box
  }, 5000);

  if (userWin) {
    console.log("user won");
    const msg = document.getElementById("msg");
    msg.innerText = "you won";
  } else {
    console.log("user lost");
    const msg = document.getElementById("msg");
    msg.innerText = "you lost";
  }
};

//game logic

const playgame = (choiceCLicked) => {
  console.log("user clicked", choiceCLicked);
  const compChoice = generateCompChoice(); //calling the generateCompChoice functio
  console.log("computer choice", compChoice);
  if (choiceCLicked == compChoice) {
    drawGame();
    const msg = document.getElementById("msg");
    msg.innerText = "DRAW";
  } else {
    let userWin = true;
    if (choiceCLicked == "stone") {
      userWin = compChoice == "paper" ? false : true;
    } else if (choiceCLicked == "paper") {
      userWin = compChoice == "scissor" ? false : true;
    } else {
      userWin = compChoice == "stone" ? false : true;
    }
    showWinner(userWin);
    displayScore(userWin);
  }
};

// below is the code to get what choice  is clicked by the user
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceCLicked = choice.getAttribute("id");
    playgame(choiceCLicked);
  });
});

const resetBtn = () => {};
