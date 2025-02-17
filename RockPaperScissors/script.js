const Score = {
    wins: 0,
    lose: 0,
    ties: 0,
  };
  
  // Check for stored score
  console.log(JSON.parse(localStorage.getItem("Score")));
  
  function PlayGame(PlayerMove) {
    let ComputerMove = pickComputerMove();
    let Status = "";
  
    if (PlayerMove === "Scissor") {
      if (ComputerMove === "Rock") {
        Status = "You lose";
      } else if (ComputerMove === "Paper") {
        Status = "You win";
      } else if (ComputerMove === "Scissor") {
        Status = "Tie";
      }
    } else if (PlayerMove === "Paper") {
      if (ComputerMove === "Rock") {
        Status = "You win";
      } else if (ComputerMove === "Paper") {
        Status = "Tie";
      } else if (ComputerMove === "Scissor") {
        Status = "You lose";
      }
    } else if (PlayerMove === "Rock") {
      if (ComputerMove === "Rock") {
        Status = "Tie";
      } else if (ComputerMove === "Paper") {
        Status = "You lose";
      } else if (ComputerMove === "Scissor") {
        Status = "You win";
      }
    } else if (PlayerMove === "Reset Score") {
      Score.wins = Score.lose = Score.ties = 0;
    }
  
    if (Status === "You win") {
      Score.wins++;
    } else if (Status === "You lose") {
      Score.lose++;
    } else if (Status === "Tie") {
      Score.ties++;
    }
  
    localStorage.setItem("Score", JSON.stringify(Score));
    alert(
      `You picked ${PlayerMove}, Computer Picked ${ComputerMove}. ${Status}
       Wins : ${Score.wins}, Loses: ${Score.lose}, Ties: ${Score.ties}`
    );
  }
  
  function pickComputerMove() {
    const randomnum = Math.random();
    let ComputerMove = "";
    if (randomnum >= 0 && randomnum < 1 / 3) {
      ComputerMove = "Rock";
    } else if (randomnum >= 1 / 3 && randomnum < 2 / 3) {
      ComputerMove = "Paper";
    } else if (randomnum >= 2 / 3 && randomnum < 1) {
      ComputerMove = "Scissor";
    }
    return ComputerMove;
  }
  