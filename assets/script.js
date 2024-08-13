const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentSlide = 0;                                            // Initialise l'index de la diapositive actuelle à 0 (la première diapositive)

// Sélection des éléments du DOM
const bannerImg = document.querySelector('#banner .banner-img'); // Sélectionne l'image de la bannière du carrousel
const bannerTagline = document.querySelector('#banner p');       // Sélectionne le texte associé à l'image de la bannière
const arrowLeft = document.querySelector('.arrow_left');         // Sélectionne la flèche gauche
const arrowRight = document.querySelector('.arrow_right');       // Sélectionne la flèche droite
const dotsContainer = document.querySelector('#banner .dots');   // Sélectionne le conteneur des bullet points

// Gestion du clic sur la flèche gauche
arrowLeft.addEventListener('click', () => { 					// Ajoute un event listener à la flèche gauche pour permettre de naviguer vers la diapositive précédente
	console.log('Flèche gauche cliquée'); 						// Alert('Flèche gauche cliquée');
	if (currentSlide > 0) {										// Si l'index de la diapositive actuelle est supérieur à 0
		updateSlide(currentSlide - 1); 							// Aller à la page précédente
	} else {													// Sinon
		updateSlide(slides.length - 1); 						// Aller à la dernière slide 
	}
});
// Gestion du clic sur la flèche droite
arrowRight.addEventListener('click', () => {					// Ajoute un event listener à la flèche droite pour permettre de naviguer vers la diapositive suivante
	console.log('Flèche droite cliquée'); 						// Alert('Flèche droite cliquée');
	if (currentSlide < slides.length - 1) {						// Si l'index de la diapositive actuelle est inférieur à l'index de la dernière diapositive
		updateSlide(currentSlide + 1); 							// Aller à la page suivante
	} else {													// Sinon
		updateSlide(0); 										// Retourner à la première slide si on est sur la dernière
	}
});

// Génération des bullet points
slides.forEach((slide, index) => {  							 // Génére les bullet points dynamiquement pour chaque diapositive dans le tableau slides
	const dot = document.createElement('div'); 					 // Crée un nouvel élément div pour représenter un bullet point
	dot.classList.add('dot'); 									 // Ajoute la classe 'dot' à l'élément div pour le styliser comme un bullet point
	if (index === 0) {  										 // Si c'est le premier bullet point
		dot.classList.add('dot_selected');                       // Ajoute la classe 'dot_selected' pour le mettre en surbrillance
	}
	dotsContainer.appendChild(dot); 							 // Ajoute le bullet point créé au conteneur de dots

	dot.addEventListener('click', () => {  						 // Ajoute un event listener qui rend chaque bullet point cliquable
		updateSlide(index);  	  								 // Met à jour la slide en fonction du bullet point cliqué
	});
});

// Fonction de mise à jour du carrousel
function updateSlide(index) {
	currentSlide = index;													   // Met à jour l'index de la diapositive actuelle
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`; // Met à jour la source de l'image de la bannière pour afficher l'image de la diapositive actuelle
	bannerTagline.innerHTML = slides[currentSlide].tagLine;					   // Met à jour le texte de la bannière avec la tagline de la diapositive actuelle


	const dots = document.querySelectorAll('.dot');					// Sélectionne tous les bullet points
	dots.forEach((dot, i) => {										// Parcourt chaque bullet point
		if (i === currentSlide) {									// Si le bullet point correspond à l'index de la diapositive actuelle
			dot.classList.add('dot_selected');                      // Ajoute la classe 'dot_selected' pour le mettre en surbrillance
		} else {													// Sinon
			dot.classList.remove('dot_selected');					// Retire la classe 'dot_selected' pour le désélectionner
		}
	});
}

updateSlide(0);													// Initialise la première diapositive à l'affichage de la page