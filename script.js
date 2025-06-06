const mensagens = [
  "Você sabia que.. ❤️",
  "Eu te amo mais a cada dia que passa?",
  "Eu quero casar com você",
  "Vamos ter 7 filhos",
  "Uma casa enorme",
  "Um quintal",
  "Um carro",
  "Quantos animais você quiser",
  "Vamos viajar pela frança",
  "Tudo que VOCÊ quiser amor",
  "eu te amo.",
  "Obrigado por tudo princesa",
  "Te amo um milhão de vezes",
];

let indiceMensagem = 0;
let digitandoInterval;

// Função para efeito de digitação da mensagem
function digitarTexto(texto, elemento, callback) {
  let i = 0;
  elemento.textContent = "";
  clearInterval(digitandoInterval);
  digitandoInterval = setInterval(() => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
    } else {
      clearInterval(digitandoInterval);
      if (callback) callback();
    }
  }, 50);
}

function iniciarSite() {
  const inicio = document.getElementById('inicio');
  const conteudo = document.getElementById('conteudo');
  const musica = document.getElementById('musica');
  const body = document.body;

  // Transição fade out do body
  body.style.opacity = 0;

  setTimeout(() => {
    inicio.style.display = 'none';
    conteudo.style.display = 'block';
    body.style.opacity = 1;

    // Tocar música
    musica.play();

    // Mostrar primeira mensagem com efeito de digitação
    const elementoMensagem = document.getElementById('mensagem');
    digitarTexto(mensagens[indiceMensagem], elementoMensagem);

    // Inicializa o contador regressivo
    iniciarContador();

  }, 1000); // 1 segundo para o fade out
}

function mostrarProximaMensagem() {
  indiceMensagem++;
  if (indiceMensagem >= mensagens.length) {
    indiceMensagem = 0;
  }
  const elementoMensagem = document.getElementById('mensagem');
  digitarTexto(mensagens[indiceMensagem], elementoMensagem);
}

function mostrarCarta() {
  const carta = document.getElementById('carta');
  if (carta.style.display === 'block') {
    carta.style.display = 'none';
  } else {
    carta.style.display = 'block';
  }
}

// Função para abrir modal da galeria
function abrirModal(img) {
  const modal = document.getElementById('modal-galeria');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = img.src;
}

// Fechar modal clicando fora da imagem
function fecharModal() {
  const modal = document.getElementById('modal-galeria');
  modal.style.display = 'none';
}

// Contador regressivo (exemplo: tempo juntos desde data X)
function iniciarContador() {
  const contador = document.getElementById('contador-dias');
  
  // Data do começo do relacionamento (ano, mês-1, dia)
  const dataInicio = new Date(2025, 4, 5); // Exemplo: 5 de Maio de 2025
  
  function atualizarContador() {
    const agora = new Date();
    const diffMs = agora - dataInicio;
    if (diffMs < 0) {
      contador.textContent = "Nosso tempo juntos ainda vai começar...";
      return;
    }
    const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const meses = Math.floor(dias / 30);
    const diasRestantes = dias % 30;
    contador.textContent = `Estamos juntos há ${meses} mês e ${diasRestantes} dias 💕`;
  }
  
  atualizarContador();
  setInterval(atualizarContador, 60 * 1000); // Atualiza a cada minuto
}

function responderSim() {
  window.location.href = "https://wa.me/5515998038280?text=Sim,%20eu%20aceito%20casar%20contigo%20";
}

function responderNao() {
  const resposta = document.getElementById("mensagem-marlon");
  resposta.style.display = "block";
}


// Faz o botão fugir ao passar o mouse
function fugir() {
  const botao = document.getElementById("botaoNao");
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;

  const novaPosicaoX = Math.random() * (larguraJanela - 150); // 150 = largura estimada do botão
  const novaPosicaoY = Math.random() * (alturaJanela - 60);   // 60 = altura estimada do botão

  botao.style.position = "absolute";
  botao.style.left = novaPosicaoX + "px";
  botao.style.top = novaPosicaoY + "px";
}
