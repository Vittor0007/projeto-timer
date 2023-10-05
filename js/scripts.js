const tempoPainel = document.getElementById("tempo");
const buttonIniciar = document.getElementById("button-iniciar");
const buttonPausar = document.getElementById("button-pausar");
const buttonretomar = document.getElementById("button-retomar");
const buttoncancelar = document.getElementById("button-cancelar");

let timerInterval;
let tempoAtual = 600;

// Função para atualizar o tempo exibido
function atualizarTempo() {
  const minutos = Math.floor(tempoAtual / 60);
  const segundos = tempoAtual % 60;
  tempoPainel.innerHTML = `<h1>${formatarTempo(minutos)}:${formatarTempo(
    segundos
  )}</h1>`;
}

// Função para formatar o tempo com dois dígitos
function formatarTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

// Event listener para o botão "Iniciar"
buttonIniciar.addEventListener("click", function () {
  // Iniciar o timer apenas se o tempoAtual for maior que 0

  timerInterval = setInterval(contador, 1000); // Atualizar a cada segundo (1000 ms)
  tempoAtual = 601;
  buttonPausar.removeAttribute("disabled");
  buttonIniciar.style.display = "none";
  buttoncancelar.style.display = "block";
});
function contador() {
  if (tempoAtual > 0) {
    tempoAtual--;
    atualizarTempo();
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    alert("Acabouuuuuuuuuu!");
  }
}

// Event listener para o botão "Pausar"
buttonPausar.addEventListener("click", function () {
  // Pausar o timer
  clearInterval(timerInterval);
  timerInterval = null;
  buttonPausar.style.display = "none";
  buttonretomar.style.display = "block";
});

//botão "cancelar, para iniciar tudo novamente"
buttoncancelar.addEventListener("click", function () {
  clearInterval(timerInterval);
  tempoAtual = 601;
  buttonIniciar.style.display = "block";
  buttoncancelar.style.display = "none";
  buttonretomar.style.display = "none";
  tempoPainel.innerHTML = '<h1 class="titulo-tempo"> 00:00 </h1>';
  buttonPausar.style.display = "block";
  buttonPausar.setAttribute("disabled", "");
});

//botão "retomar de onde estava a contagem"
buttonretomar.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = setInterval(contador, 1000);

  buttonPausar.style.display = "block";
  buttonretomar.style.display = "none";
});

// Inicializar o tempo exibido
atualizarTempo();
