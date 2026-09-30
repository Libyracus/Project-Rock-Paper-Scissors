// Step 2: Computer Choice Logic
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Human Choice Logic
function getHumanChoice() {
  const input = prompt("Enter your choice: rock, paper, or scissors");
  return input;
}

// Step 6: Main Game Function
function playGame() {
  // Step 4: Player Score Variables (Scoped inside playGame)
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Single Round Logic
  function playRound(humanChoice, computerChoice) {
    // Normalize human input for case-insensitivity
    const normalizedHumanChoice = humanChoice.toLowerCase();

    if (normalizedHumanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${normalizedHumanChoice}.`);
      return;
    }

    if (
      (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
      (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
      (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(
        `You win! ${
          normalizedHumanChoice.charAt(0).toUpperCase() +
          normalizedHumanChoice.slice(1)
        } beats ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }.`
      );
    } else {
      computerScore++;
      console.log(
        `You lose! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${
          normalizedHumanChoice.charAt(0).toUpperCase() +
          normalizedHumanChoice.slice(1)
        }.`
      );
    }
  }

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current Score - You: ${humanScore} | Computer: ${computerScore}`);
  }

  // Final Winner Announcement
  console.log("====================");
  if (humanScore > computerScore) {
    console.log(`Congratulations! You won the game ${humanScore} to ${computerScore}!`);
  } else if (computerScore > humanScore) {
    console.log(`Game over! The computer beat you ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`The game ends in a tie! Final Score: ${humanScore} - ${computerScore}`);
  }
}

// Start the game
playGame();