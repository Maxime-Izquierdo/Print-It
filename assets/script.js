const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

const bannerImg = document.querySelector('#banner .banner-img');
const bannerTagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('#banner .dots'); // Sélection du conteneur de points de navigation
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Générer les bullet points dynamiquement
slides.forEach((slide, index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) {
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);

	dot.addEventListener('click', () => {
		updateSlide(index);
	});
});

function updateSlide(index) {
	currentSlide = index;
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerTagline.innerHTML = slides[currentSlide].tagLine;


// Mettre à jour les bullet points
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, i) => {
	if (i === currentSlide) {
		dot.classList.add('dot_selected');
	} else {
		dot.classList.remove('dot_selected');
	}
});
}

arrowLeft.addEventListener('click', () => {
	console.log('Flèche gauche cliquée'); // alert('Flèche gauche cliquée');
	if (currentSlide > 0) {
		updateSlide(currentSlide - 1);
	} else {
		updateSlide(slides.length - 1); // Aller à la dernière slide si on est sur la première
	}
});

arrowRight.addEventListener('click', () => {
	console.log('Flèche droite cliquée'); // alert('Flèche droite cliquée');
	if (currentSlide < slides.length - 1) {
		updateSlide(currentSlide + 1);
	} else {
		updateSlide(0); // Retourner à la première slide si on est sur la dernière
	}
});

// Initialiser la première slide
updateSlide(0);