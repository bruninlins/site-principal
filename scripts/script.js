const canvas = document.getElementById('espaco');
const ctx = canvas.getContext('2d');
let estrelas = [];

function criarEstrelas() {
  estrelas = [];
  const quantidadeEstrelas = Math.floor((canvas.width * canvas.height) / 3000); // responsivo
  for (let i = 0; i < quantidadeEstrelas; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      velocidade: 1 + Math.random() * 2,
      tamanho: Math.random() * 2 + 1
    });
  }
}

function redimensionar() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  criarEstrelas(); // recria as estrelas com base no novo tamanho
}

window.addEventListener('resize', redimensionar);
redimensionar();

function animar() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < estrelas.length; i++) {
    let estrela = estrelas[i];

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(estrela.x, estrela.y, estrela.tamanho, 0, 2 * Math.PI);
    ctx.fill();

    estrela.y += estrela.velocidade;

    if (estrela.y > canvas.height) {
      estrela.y = -estrela.tamanho;
      estrela.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animar);
}

animar();

