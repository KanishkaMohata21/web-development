document.addEventListener('DOMContentLoaded', function () {
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissor = document.querySelector(".scissor");
    let scoreOfCom = document.querySelector(".sOfCom");
    let scoreOfPlayer = document.querySelector(".sOfPlayer");
    let choose = document.querySelector(".choose");

    let scoreComputer = 0;
    let scorePlayer = 0;

    function updateScore() {
        scoreOfCom.textContent = scoreComputer;
        scoreOfPlayer.textContent = scorePlayer;
    }

    function playRound(playerSelection) {
        const choices = ["rock", "paper", "scissor"];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        choose.textContent = `You selected ${playerSelection}, computer selected ${computerSelection}.`;

        if (playerSelection === computerSelection) {
            choose.textContent += " It's a tie!";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissor") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissor" && computerSelection === "paper")
        ) {
            choose.textContent += " You won!";
            scorePlayer++;
        } else {
            choose.textContent += " Computer won!";
            scoreComputer++;
        }

        updateScore();
    }

    rock.addEventListener('click', function () {
        playRound("rock");
    });

    paper.addEventListener('click', function () {
        playRound("paper");
    });

    scissor.addEventListener('click', function () {
        playRound("scissor");
    });
});

