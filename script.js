

// Funktion der Navigation 
document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.getElementById('nav-menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});



// Funktion des Q&As 
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    const icon = document.getElementById(`icon-${id.slice(-2)}`); // ID des Icons extrahieren
    
    if (answer.classList.contains('visible')) {
        // Antwort einklappen
        answer.classList.remove('visible');
        answer.style.maxHeight = null;
        icon.src = 'img/icons/plus.png'; // Plus-Icon setzen
    } else {
        // Antwort ausklappen
        answer.classList.add('visible');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.src = 'img/icons/minus.png'; // Minus-Icon setzen
    }
}

// Kassussel startseite
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

prevBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 310;
    carousel.style.transform = `translateX(${offset}px)`;
}


//FUnktion der Zertifikate 
function toggleP() {
    let div = document.getElementById("zertifikatEins");
    if (div.style.zIndex === "0") {
        div.style.zIndex = "1";
    } else {
        div.style.zIndex = "0"
    }
}

//slider für anzeige
