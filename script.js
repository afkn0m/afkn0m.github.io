const backgroundImages = [
  'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg'
];

const centralImages = [
  'img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png', 'img7.png'
];

const messages = [
  'aceptarias', 'una cita', 'viendo un eclipse lunar', 'conmigo? :3', 'ah', 'casi lo olvido', 'feliz 8vo mes juntos <3'
];

const hearts = [
  'heart1.png', 'heart2.png', 'heart3.png', 'heart4.png'
];

let messageIndex = 0;
let imageIndex = 0;

const heartPositions = [
  { left: '10%', top: '10%' },   // Esquina superior izquierda
  { left: '70%', top: '20%' },   // Centro izquierdo
  { left: '30%', top: '50%' },   // Centro de la página
  { left: '80%', top: '60%' },   // Centro derecho
  { left: '40%', top: '80%' },   // Abajo centro
  { left: '60%', top: '40%' },   // Medio superior
  { left: '20%', top: '70%' },   // Abajo a la izquierda
  { left: '90%', top: '30%' },   // Arriba a la derecha
  { left: '50%', top: '10%' },   // Centro superior
  { left: '20%', top: '40%' },   // Centro izquierda
  { left: '5%', top: '90%' },    // Esquina inferior izquierda (ajustado)
  { left: '95%', top: '90%' },   // Esquina inferior derecha
  { left: '90%', top: '10%' },   // Esquina superior derecha
  { left: '5%', top: '60%' },    // Añadido corazón en el centro izquierdo
  
];

function changeContent() {
  // Cambiar la imagen de fondo
  document.body.style.backgroundImage = `url(${backgroundImages[imageIndex]})`;

  // Cambiar la imagen central
  document.getElementById('centralImage').src = centralImages[imageIndex];

  // Mostrar el mensaje correspondiente
  document.getElementById('message').textContent = messages[messageIndex];

  // Limpiar los corazones anteriores
  const heartsContainer = document.getElementById('hearts-container');
  heartsContainer.innerHTML = ''; 

  // Si el mensaje es el último, mostrar los corazones
  if (messages[messageIndex] === 'feliz 8vo mes juntos <3') {
    // Generar nuevos corazones en posiciones fijas
    for (let i = 0; i < heartPositions.length; i++) { // Usamos las posiciones definidas
      const heart = document.createElement('img');
      heart.src = hearts[Math.floor(Math.random() * hearts.length)]; // Elige aleatoriamente un corazón
      heart.classList.add('heart');

      // Asignar tamaños aleatorios a los corazones
      const size = Math.random() * 40 + 20; // Tamaños entre 20px y 60px
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;

      // Asignar la posición fija definida en heartPositions
      heart.style.left = heartPositions[i].left;
      heart.style.top = heartPositions[i].top;

      heartsContainer.appendChild(heart);
    }
  }

  // Incrementar los índices para el siguiente clic
  messageIndex = (messageIndex + 1) % messages.length;
  imageIndex = (imageIndex + 1) % backgroundImages.length;
}

// Cargar contenido inicial
changeContent();