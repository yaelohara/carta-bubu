const paginas = [
  "Mi amor ❤️\n\nDesde que llegaste a mi vida, todo cambió para bien.",
  "Tus sonrisas, tus abrazos, tu forma de hablar...\nTodo de ti me hace feliz.",
  "Eres mi persona favorita, mi paz, mi motivación\ny mi pensamiento más bonito.",
  "Gracias por existir y por dejarme amarte.\nTe amo con todo mi corazón 💕"
];

let paginaActual = 0;

function actualizarTexto() {
  document.getElementById("texto").innerText = paginas[paginaActual];
}

function siguiente() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    actualizarTexto();
  }
}

function anterior() {
  if (paginaActual > 0) {
    paginaActual--;
    actualizarTexto();
  }
}

function generarCorazones() {
  const heartContainer = document.querySelector('.heart-bg');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.fontSize = `${16 + Math.random() * 16}px`;
    heartContainer.appendChild(heart);
  }
}

actualizarTexto();
generarCorazones();
