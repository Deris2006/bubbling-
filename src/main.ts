import './style.css';

const gallery = document.querySelector<HTMLDivElement>('.gallery');
const modal = document.getElementById('modal') as HTMLDivElement;
const modalImage = document.getElementById('modal-image') as HTMLImageElement;
const closeModal = document.querySelector<HTMLSpanElement>('.close-modal');
const backToTopButton = document.getElementById('back-to-top') as HTMLButtonElement;

if (!gallery || !modal || !modalImage || !closeModal || !backToTopButton) {
  throw new Error('No se encontraron los elementos del DOM necesarios.');
}

// --- Delegación de Eventos para Clics en la Galería ---
gallery.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  // --- Botón "Me Gusta" ---
  if (target.closest('.like-btn')) {
    event.stopPropagation(); // Prevenir que el clic se propague a la tarjeta
    const likeBtn = target.closest('.like-btn') as HTMLButtonElement;
    const counter = likeBtn.querySelector('span');
    if (counter) {
      let count = parseInt(counter.textContent || '0', 10);
      count++;
      counter.textContent = count.toString();
      likeBtn.classList.toggle('liked');
    }
    console.log('Clic en "Me gusta", propagación detenida.');
  }
  // --- Botón "Eliminar" ---
  else if (target.closest('.delete-btn')) {
    event.stopPropagation(); // Prevenir que el clic se propague a la tarjeta
    const card = target.closest('.card');
    if (card) {
      card.remove();
    }
    console.log('Clic en "Eliminar", propagación detenida.');
  }
});

// --- Doble Clic para Abrir Modal ---
gallery.addEventListener('dblclick', (event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === 'IMG') {
    modal.style.display = 'flex';
    modalImage.src = (target as HTMLImageElement).src;
  }
});

// --- Cerrar Modal ---
const closeModalHandler = () => {
  modal.style.display = 'none';
};

closeModal.addEventListener('click', closeModalHandler);
modal.addEventListener('click', (event) => {
  // Cerrar si se hace clic en el fondo del modal, no en la imagen
  if (event.target === modal) {
    closeModalHandler();
  }
});


// --- Efectos con el Mouse (ya manejado por CSS :hover) ---
// La descripción se muestra y oculta usando :hover en CSS,
// que es más eficiente que usar JavaScript (mouseover/mouseout).

// --- Botón "Volver Arriba" ---
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
