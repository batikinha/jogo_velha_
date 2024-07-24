document.addEventListener('DOMContentLoaded', () => {
    let currentPlayer = 'X';
    const cells = document.querySelectorAll('.quadrado');
    const playerDisplay = document.getElementById('jogador1');
    const winnerDisplay = document.getElementById('vencedor1');
    const resetButton = document.getElementById('reset');

    playerDisplay.textContent = currentPlayer;

    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    const checkWin = () => {
        let winner = null;
        winningCombinations.forEach(combination => {
            const [a, b, c] = combination;
            if (document.getElementById(a).textContent === currentPlayer &&
                document.getElementById(b).textContent === currentPlayer &&
                document.getElementById(c).textContent === currentPlayer) {
                winner = currentPlayer;
            }
        });
        return winner;
    };

    const handleClick = (event) => {
        const cell = event.target;
        if (cell.textContent === '' && winnerDisplay.textContent === '') {
            cell.textContent = currentPlayer;
            const winner = checkWin();
            if (winner) {
                winnerDisplay.textContent = winner;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                playerDisplay.textContent = currentPlayer;
            }
        }
    };

    cells.forEach(cell => cell.addEventListener('click', handleClick));

    const resetGame = () => {
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
        playerDisplay.textContent = currentPlayer;
        winnerDisplay.textContent = '';
    };

    resetButton.addEventListener('click', resetGame);
});
