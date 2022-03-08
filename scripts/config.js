
function openPlayerConfig(){
  playerConfigOverlay.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig(){
  playerConfigOverlay.style.display = 'none';
  backdrop.style.display = 'none';
  form.firstElementChild.classList.remove('error')
  errorsOutput.textContent = '';
}

function savePlayerConfig(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();

  if(!enteredPlayername ){
    event.target.firstElementChild.classList.add('error')
    errorsOutput.textContent = 'Please enter a valid name';
    return;
  }
}

