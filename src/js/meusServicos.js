const carrossel = document.querySelector('.carrossel-animado');
const containers = document.querySelectorAll('.container-servico');
let currentIndex = 3;
let nextIndex = 0;

// Largura de cada item + gap
const itemWidth = 373; // Largura de cada container-servico
const gap = 60; // Espaço entre os itens
const totalWidth = itemWidth + gap; // Largura total de cada item (incluindo o gap)

// Inicialmente, oculta a quarta div
containers[3].style.display = 'none';

function rotateCarrossel() {

  // Exibe a próxima div
  containers[currentIndex].style.display = 'flex';
  currentIndex++;
  if (currentIndex === 4) {
    currentIndex = 0;
  }

  // Move o carrossel para a esquerda
  carrossel.style.transition = 'transform 0.2s ease-in-out';
  carrossel.style.transform = `translateX(-${totalWidth}px)`;

  // Aguarda o fim da transição
  setTimeout(() => {
    // Remove a transição para evitar animações indesejadas
    carrossel.style.transition = 'none';

    // Move o primeiro item para o final do carrossel
    const firstItem = carrossel.firstElementChild;
    carrossel.appendChild(firstItem);

    // Reposiciona o carrossel para o início
    carrossel.style.transform = 'translateX(0)';

    // Oculta a div que saiu da tela
    containers[nextIndex].style.display = 'none';
    nextIndex++;
    if (nextIndex === 4) {
      nextIndex = 0;
    }
    
  }, 200); // Tempo correspondente à duração da animação (0.5s)
}

// Inicia a rotação a cada 3 segundos
setInterval(rotateCarrossel, 5000);