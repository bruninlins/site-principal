const canvaSobre = document.querySelector('#espaco-sobre')
const ctx = canvaSobre.getContext('2d');
let estrelas = [];

function criarEstrelas() {
  estrelas = [];
  const quantidadeEstrelas = Math.floor((canvaSobre.width * canvaSobre.height) / 3000); // responsivo
  for (let i = 0; i < quantidadeEstrelas; i++) {
    estrelas.push({
      x: Math.random() * canvaSobre.width,
      y: Math.random() * canvaSobre.height,
      velocidade: 0 + Math.random() * 1,
      tamanho: Math.random() * 2 + 1
    });
  }
}

function redimensionar() {
  canvaSobre.width = window.innerWidth;
  canvaSobre.height = window.innerHeight;
  criarEstrelas(); // recria as estrelas com base no novo tamanho
}

window.addEventListener('resize', redimensionar);
redimensionar();

function animar() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvaSobre.width, canvaSobre.height);

  for (let i = 0; i < estrelas.length; i++) {
    let estrela = estrelas[i];

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(estrela.x, estrela.y, estrela.tamanho, 0, 2 * Math.PI);
    ctx.fill();

    estrela.y += estrela.velocidade;

    if (estrela.y > canvaSobre.height) {
      estrela.y = -estrela.tamanho;
      estrela.x = Math.random() * canvaSobre.width;
    }
  }

  requestAnimationFrame(animar);
}

animar();