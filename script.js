
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let isRunning = false; // Variável para rastrear o estado do temporizador

let h1 = document.querySelector('h1');
let seconds = 0;
let cron;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  return formattedTime;
}

function iniciar() {
  button1.style.display = 'none';
  button2.style.display = 'inline-block';
  button3.style.display = 'inline-block';
  if (!isRunning) { // Verifica se o temporizador não está em execução
    cron = setInterval(function () {
      seconds++;
      h1.innerHTML = formatTime(seconds);
    }, 1000);
    isRunning = true; // Define o estado como em execução
    
  }
  
}

function stop() {
  if (isRunning) { // Verifica se o temporizador está em execução
    // Se estiver em execução, pára o cronômetro
    clearInterval(cron);
    isRunning = false; // Define o estado como pausado
    button2.innerHTML = 'Iniciar'; // Altera o texto do botão para "Iniciar"
    button2.style.backgroundColor = "rgb(2, 138, 2)"; // Cor verde
  } else {
    // Se estiver pausado, retoma o cronômetro
    cron = setInterval(function () {
      seconds++;
      h1.innerHTML = formatTime(seconds);
    }, 1000);
    isRunning = true; // Define o estado como em execução
    button2.innerHTML = 'Pausar'; // Altera o texto do botão para "Pausar"
    button2.style.backgroundColor = "rgb(255, 0, 0)";
  }
}

button1.addEventListener('click', iniciar);
button2.addEventListener('click', stop);

button3.addEventListener('click', () => {
  clearInterval(cron); // Parar o cronômetro ao redefinir
  isRunning = false;
  seconds = 0;
  h1.innerHTML = '00:00';
  button1.style.display = 'inline-block';
  button2.style.display = 'none';
  button3.style.display = 'none';
});
