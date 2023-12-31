document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const restartButton = document.getElementById('new_game');
    const messageElement = document.querySelector('.popup .message');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function handleBoxClick(index) {
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            boxes[index].textContent = currentPlayer;
            if (checkWinner()) {
                gameActive = false;
                messageElement.textContent = `🎉🎉 Player ${currentPlayer} wins! 🎉🎉`;
            } else if (gameBoard.every(cell => cell !== '')) {
                gameActive = false;
                messageElement.textContent = "It's a draw!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                messageElement.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]              
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => gameBoard[index] === currentPlayer)
        );
    }

    function restartGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        boxes.forEach(box => box.textContent = '');
        currentPlayer = 'X';
        gameActive = true;
        messageElement.textContent = `Player ${currentPlayer}'s turn`;
    }


    boxes.forEach((box, index) => {
        box.addEventListener('click', () => handleBoxClick(index));
    });

    restartButton.addEventListener('click', restartGame);
});

