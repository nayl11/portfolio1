// // Récupérer le formulaire et le conteneur de messages
// const form = document.getElementById('contactForm');
// const messageContainer = document.getElementById('messageContainer');

// // Ajouter un écouteur d'événement pour intercepter la soumission
// form.addEventListener('submit', function(event) {
//     // Empêcher l'envoi du formulaire
//     event.preventDefault();

//     // Récupérer les valeurs des champs
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Vérifier si tous les champs sont remplis
//     if (name && email && message) {
//         // Afficher le message de succès
//         messageContainer.innerHTML = '<p class="success">Merci pour votre message ! Nous vous répondrons sous peu.</p>';
//     } else {
//         // Afficher le message d'erreur
//         messageContainer.innerHTML = '<p class="error">Tous les champs doivent être remplis !</p>';
//     }
// });


let currentIndex = 0;
const slides = document.querySelectorAll('.carrousel-slide');
const totalSlides = slides.length;

function moveSlide(step) {
  currentIndex += step;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;  // Revenir à la première image
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;  // Revenir à la dernière image
  }

  updateCarousel();
}

function updateCarousel() {
  const newTransformValue = -currentIndex * 100;
  document.querySelector('.carrousel-images').style.transform = `translateX(${newTransformValue}%)`;
}

// Faire défiler automatiquement toutes les 3 secondes
setInterval(() => {
  moveSlide(1);
}, 3000);