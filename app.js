import { annotate ,annotationGroup} from 'https://unpkg.com/rough-notation?module';

const circle_a = document.getElementById("circle_a")
const circle_a1 = annotate(circle_a, { type: 'circle', color: '#054A91',   animationDuration: 3000   // durata in millisecondi
})

/*const underline_a = document.getElementById("underline_a")
const underline_a1 = annotate(underline_a, { type: 'underline', color: '#054A91',   animationDuration: 5000
})*/

const underline_a2 = document.getElementById("underline_a2")
const underline_a12 = annotate(underline_a2, { type: 'underline', color: '#054A91',   animationDuration: 3000
})

const box_a = document.getElementById("box_a")
const box_a1 = annotate(box_a, { type: 'box', color: '#054A91',   animationDuration: 3000
})

const highlighter_a = document.getElementById("highlighter_a")
const highlighter_a1 = annotate(highlighter_a, { type: 'highlight', color: '#054A91',   animationDuration: 3000
})

circle_a1.show()
/*underline_a1.show()*/
underline_a12.show()
box_a1.show()
highlighter_a1.show()

document.addEventListener('contextmenu', e => e.preventDefault());


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Tutti si muovono verso l'alto come la pagina, ma a velocità diverse
  document.querySelector('.intro').style.transform = `translateY(${scrollY * 0.1}px)`;
  document.querySelector('.circles-container').style.transform = `translateY(${scrollY * 0.2}px)`;
  document.querySelector('.intro-img-container').style.transform = `translateY(${scrollY * -0.35}px)`;
  document.querySelector('.circles-container_1').style.transform = `translateY(${scrollY * 0.5}px)`;
  document.querySelector('.intro-2').style.transform = `translateY(${scrollY * -0.7}px)`;
    document.querySelector('.portfolio').style.transform = `translateY(${scrollY * -0.7}px)`;
        document.querySelector('.cards-container').style.transform = `translateY(${scrollY * -0.7}px)`;
});

//NAVBAR
// Prendi il riferimento alla navbar
const navbar = document.querySelector('.frosted-glass-navbar');

// Soglia di scroll in pixel (puoi cambiarla)
const scrollThreshold = 400;

// Ascolta lo scroll della pagina
window.addEventListener('scroll', () => {
  // Se si è scrollato verso il basso (non è più in cima)
  //if (window.scrollY > 0) {
  if (window.scrollY > scrollThreshold) {
    // Aggiungi la classe "visible" per far apparire la navbar
    navbar.classList.add('visible');
  } else {
    // Rimuovi la classe "visible" per nascondere la navbar
    navbar.classList.remove('visible');
  }
});
//HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
});
//FINE NAVBAR