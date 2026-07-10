//SHOW HEADER ON SCROLL FN
const header = document.querySelector('header');
const secBanner = document.querySelector('.banner-area');
document.addEventListener('scroll', () => {
    let scrollOffset = window.pageYOffset;
    if (scrollOffset > 400) {
        header.style.position = 'fixed';
        header.classList.remove('hiddeHeaderAnimation');
        header.classList.remove('showHeaderTopAnimation');
        header.classList.add('showHeaderAnimation');
    };
    if (scrollOffset < 400 && header.classList.contains('showHeaderAnimation')) {
        header.classList.remove('showHeaderAnimation');
        header.classList.add('hiddeHeaderAnimation');
        setTimeout(() => {
            header.style.position = 'absolute';
            header.classList.remove('hiddeHeaderAnimation');
            header.classList.add('showHeaderTopAnimation');
        }, 300);
    };
});


//TYPING ANIMATION FN
function typeTextAnimation(el) {
    const text = 'DESENVOLVEDOR FRONT-END.'
    const textArr = text.split('');
    textArr.forEach((letter, index) => {
        setTimeout(() => {
            el.innerHTML += letter;
        }, 100 * index);
    })
}

const insertText = document.querySelector('.typeTextAnimation');
setTimeout(() => {
    typeTextAnimation(insertText);
}, 1200);

console.log(window.innerWidth);

//CLOSE NAVBAR ON CLICK
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
navLinks.forEach((l) => {
    l.addEventListener('click', () => { navToggle(); })
})
function navToggle() {
    if(window.innerWidth < 768) {
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        bsCollapse.toggle();
    }
}


//HEADER ACTIVE LINK OBSERVER
const linkObserver0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navList .active').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.navList .inicio').forEach(i => i.classList.add('active'));
        }
    })
})
linkObserver0.observe(document.querySelector('.inicio-intersection'));

const linkObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navList .active').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.navList .sobre-mim').forEach(i => i.classList.add('active'));
        }
    })
})
linkObserver1.observe(document.querySelector('.aboutme-intersection'));

const linkObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.navList .active').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.navList .projetos').forEach(i => i.classList.add('active'));
        }
    })
})
linkObserver2.observe(document.querySelector('.projects-intersection'));


//SHOW MORE PROJECTS FN
function showMore() {
    let mobileHidden = document.querySelectorAll('.project-area .mobileHidden');
    let mobileHiddenBtn = document.querySelector('.project-area .seeMoreBtn');
    mobileHidden.forEach(i => {
        if (i.classList.contains('d-none')) {
            i.classList.add('fadeInLeft')
            i.classList.remove('reverseFadeInLeft');
            i.classList.remove('d-none');
            i.classList.add('d-flex');
            mobileHiddenBtn.innerHTML = `Ver menos projetos <i class="bi bi-arrow-up"></i>`
        } else if (i.classList.contains('d-flex')) {
            i.classList.remove('fadeInLeft')
            i.classList.add('reverseFadeInLeft');
            setTimeout(() => {
                i.classList.remove('d-flex');
                i.classList.add('d-none');
            }, 800)
            mobileHiddenBtn.innerHTML = `Ver mais projetos <i class="bi bi-arrow-down"></i>`
        }
    })
}

function showMoreDesktop() {
    let mobileHidden = document.querySelectorAll('.project-area .desktopHidden');
    let mobileHiddenBtn = document.querySelector('.project-area .seeMoreBtnDesktop');
    mobileHidden.forEach(i => {
        if (i.classList.contains('d-none')) {
            i.classList.add('fadeInLeft')
            i.classList.remove('reverseFadeInLeft');
            i.classList.remove('d-none');
            i.classList.add('d-flex');
            mobileHiddenBtn.innerHTML = `Ver menos projetos <i class="bi bi-arrow-up"></i>`
        } else if (i.classList.contains('d-flex')) {
            i.classList.remove('fadeInLeft')
            i.classList.add('reverseFadeInLeft');
            setTimeout(() => {
                i.classList.remove('d-flex');
                i.classList.add('d-none');
            }, 800)
            mobileHiddenBtn.innerHTML = `Ver mais projetos <i class="bi bi-arrow-down"></i>`
        }
    })
}


//SECTION PROJECTS MODALS
document.querySelectorAll('.project-img').forEach(i => i.addEventListener('click', openModal2));
function openModal2(e) {
    let pTarget = e.target;
    let pCard = pTarget.closest('.card');
    let pTitle = pCard.querySelector('.card-title').innerText;
    let pProject = pCard.querySelector('.card-footer a').getAttribute('href')

    let modal2 = document.querySelector('#projects-modal');
    modal2.querySelector('.modal-title').innerHTML = pTitle;
    modal2.querySelector('.modal-link-p').setAttribute('href', pProject);

    if (pTarget.classList.contains('educationWebsite')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Education-Website');
    } else if (pTarget.classList.contains('dashboard')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Dashboard');
    } else if (pTarget.classList.contains('primeGaming')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Prime-Gaming-Clone');
    } else if (pTarget.classList.contains('jogoDaVelha')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Tic-Tac-Toe');
    } else if (pTarget.classList.contains('formValidator')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Form-Validator');
    } else if (pTarget.classList.contains('calculator')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Calculator');
    } else if (pTarget.classList.contains('gifSearcher')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Gif-Searcher');
    } else if (pTarget.classList.contains('passwordGen')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Password-Generator');
    } else if (pTarget.classList.contains('pizzaWebsite')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Pizza-Delivery');
    } else if (pTarget.classList.contains('cssHover')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/CSS-Hover-Effect');
    } else if (pTarget.classList.contains('drSlider')) {
        modal2.querySelector('.modal-link-r').setAttribute('href', 'https://github.com/vinicius-koga/Draggable-Slider');
    }
}


//FADE IN ON SCROLL FN
const observer0 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.animated0').classList.add('fadeInRight');
        }
    })
})
observer0.observe(document.querySelector('.animated0'));

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.animated1').classList.add('fadeInLeft');
        }
    })
})
observer1.observe(document.querySelector('.animated1'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.animated2').classList.add('fadeInLeft');
        }
    })
})
observer2.observe(document.querySelector('.animated2'));


//VANILLA TILT
VanillaTilt.init(document.querySelector("#banner-avatar"), {
    max: 15,
    speed: 400
});

VanillaTilt.init(document.querySelectorAll(".lang-box"), {
    speed: 400
});