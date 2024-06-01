 // Initialize the game board
 const board = ['', '', '', '', '', '', '', '', ''];
 let currentPlayer = 'X';
 let gameActive = true;

 // Create the game board dynamically
 const boardElement = document.getElementById('board');
 for (let i = 0; i < 9; i++) {
   const cell = document.createElement('div');
   cell.classList.add('cell');
   cell.setAttribute('data-index', i);
   cell.addEventListener('click', handleCellClick);
   boardElement.appendChild(cell);
 }

 // Handle cell click event
 function handleCellClick(event) {
   const index = event.target.getAttribute('data-index');

   // Check if the cell is already occupied or the game is over
   if (board[index] === '' && gameActive) {
     board[index] = currentPlayer;
     event.target.textContent = currentPlayer;
     checkWinner();
     togglePlayer();
   }
 }

 // Check for a winner or a tie
 function checkWinner() {
   const winPatterns = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
     [0, 4, 8], [2, 4, 6]             // Diagonals
   ];

   for (const pattern of winPatterns) {
     const [a, b, c] = pattern;
     if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
       gameActive = false;
       document.getElementById('status').textContent = `${currentPlayer} wins!`;
       return;
     }
   }

   if (!board.includes('')) {
     gameActive = false;
     document.getElementById('status').textContent = 'It\'s a tie!';
   }
 }

 // Switch players
 function togglePlayer() {
   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
 }