function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set custom name for both players!');
    return;
  }
  activePlayer.textContent = players[activePlayer].name;
  gameArea.style.display = 'block';
}

function switchPlayer() {
  if(activePlayer === 0){
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event){
 event.target.textContent = players[activePlayer].symbol;
 event.target.classList.add('disabled');
 switchPlayer()
}