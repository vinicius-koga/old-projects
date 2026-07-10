//Initial Data
let board = {
   a1: '', a2: '', a3: '',
   b1: '', b2: '', b3: '',
   c1: '', c2: '', c3: ''
};
let playerTurn = '';
let winner = '';
let playing;

reset();



//Click Events
document.querySelectorAll('.item').forEach((i) => {
   i.addEventListener('click', itemClick);
})
document.querySelector('.reset').addEventListener('click', reset);



//Event Functions
function itemClick(e) {
   let cBox = e.target.getAttribute('data-item');
   if (playing && board[cBox] === '') {
      board[cBox] = playerTurn;
      renderBoard();
      tooglePlayer();
      renderInfo();
   }
}

function renderBoard() {
   for (let i in board) {
      let item = document.querySelector(`div[data-item="${i}"]`)
      item.innerHTML = board[i];
   }
   checkGame();
}

function renderInfo() {
   document.querySelector('.vez').innerHTML = playerTurn;
   document.querySelector('.resultado').innerHTML = winner;
}

function tooglePlayer() {
   playerTurn = (playerTurn === 'x') ? 'o' : 'x';
}

function reset() {
   winner = '?';

   for (let i in board) {
      board[i] = '';
   }

   let random = Math.floor(Math.random() * 2);
   playerTurn = (random === 0) ? 'x' : 'o';

   playing = true;

   document.querySelector('.infoitem').style.display = 'block';
   document.querySelector('.info').style.border = '1px solid #999';

   renderBoard();
   renderInfo();
}



//Check Winner Functions
function checkWinner(player) {
   let winPos = [
      'a1,a2,a3',
      'b1,b2,b3',
      'c1,c2,c3',

      'a1,b1,c1',
      'a2,b2,c2',
      'a3,b3,c3',

      'a1,b2,c3',
      'a3,b2,c1'
   ];

   for (let i in winPos) {
      let wArray = winPos[i].split(',');

      let won = wArray.every(p => board[p] === player)

      if (won) {
         return true;
      }
   }

   return false;
}

function checkGame() {
   if (checkWinner('x') === true) {
      winner = 'x';
      playing = false;
      document.querySelector('.infoitem').style.display = 'none';
      document.querySelector('.info').style.border = '1px solid green';
   } else if (checkWinner('o') === true) {
      winner = 'o';
      playing = false;
      document.querySelector('.infoitem').style.display = 'none';
      document.querySelector('.info').style.border = '1px solid green';
   } else if (isFull() === true) {
      winner = 'EMPATE';
      playing = false;
      document.querySelector('.infoitem').style.display = 'none';
      document.querySelector('.info').style.border = '1px solid yellow';
   }
}

function isFull() {
   for (let i in board) {
      if (board[i] === '') {
         return false;
      }
   }

   return true;
}
