let menuIcon = document.querySelector('#menu-icon');
let navjs = document.querySelector('.navjs')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navjs.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = windows.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
}

//Selecionar o elemento da barra de navegação
const navbar = document.getElementById('navbar');

// Função para alterar a classe CSS da barra de navegação ao rolar a página
function alterarClasseBarraNavegacao() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }
}

// Adicionar um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', alterarClasseBarraNavegacao);

// Chamar a função uma vez ao carregar a página para lidar com o estado inicial
alterarClasseBarraNavegacao();

menuIcon.classList.remove('bx-x');
navjs.classList.remove('active');