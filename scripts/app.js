const gameData = [
 [0, 0, 0],
 [0, 0, 0],
 [0, 0, 0],
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name:'',
    symbol: 'O'
  }
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const form = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOver = document.getElementById('game-over')


const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const startNewGameBtn = document.getElementById('start-game-btn');
const gameFields = document.querySelectorAll('#game-board li');
const gameBoard = document.getElementById('game-board');

editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig );
backdrop.addEventListener('click', closePlayerConfig);

form.addEventListener(' submit', savePlayerConfig);

startNewGameBtn.addEventListener('click', startNewGame);

for(gameField of gameFields){
  gameField.addEventListener('click', selectGameField )
}