const arrowBtnRight = document.querySelector('.header .arrow-btn.right');
const arrowBtnLeft = document.querySelector('.header .arrow-btn.left');
const homeBtn = document.querySelector('.header .homeBtn');
const conhecimentosBtn = document.querySelector('.header .conhecimentosBtn');
const projetosBtn = document.querySelector('.header .projetosBtn');
const contatoBtn = document.querySelector('.header .contatoBtn');
const logo = document.querySelector('.header .header-logo');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header-logo');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');


// DESKTOP //
let currentPage = 0;

arrowBtnRight.addEventListener('click', () => {
    currentPage++;
    switchPage();
    checkPage();
    switchLogo();
})

arrowBtnLeft.addEventListener('click', () => {
    currentPage--;
    switchPage();
    checkPage();
    switchLogo();
})

homeBtn.addEventListener('click', () => {
    currentPage = 0;
    switchPage();
    switchLogo()
})

conhecimentosBtn.addEventListener('click', () => {
    currentPage = 1;
    switchPage();
    switchLogo()
})

projetosBtn.addEventListener('click', () => {
    currentPage = 2;
    switchPage();
    switchLogo()
})

contatoBtn.addEventListener('click', () => {
    currentPage = 3;
    switchPage();
    switchLogo()
})

function checkPage() {
    if(currentPage > 3) {
        currentPage = 3;
        arrowBtnRight.classList.add('shake')
        setTimeout(() => {
            arrowBtnRight.classList.remove('shake')
        }, 1000)
    }
}

function switchPage() {
    if(currentPage === 0) {
        body.style.marginLeft = '0'
        document.querySelector('.header a.active').classList.remove('active');
        homeBtn.classList.add('active')
    }
    if(currentPage === 1) {
        body.style.marginLeft = '-100vw'
        document.querySelector('.header a.active').classList.remove('active');
        conhecimentosBtn.classList.add('active')
    }
    if(currentPage === 2) {
        body.style.marginLeft = '-200vw'
        document.querySelector('.header a.active').classList.remove('active');
        projetosBtn.classList.add('active')
    }
    if(currentPage === 3) {
        body.style.marginLeft = '-300vw'
        document.querySelector('.header a.active').classList.remove('active');
        contatoBtn.classList.add('active')
    }
}

function switchLogo() {
    if(currentPage > 0) {
        logo.style.opacity = '0';
        setTimeout(() => {logo.style.display = 'none'}, 200)
        setTimeout(() => {arrowBtnLeft.style.display = 'block'}, 200);
        setTimeout(() => {arrowBtnLeft.style.opacity = '1'}, 220);
    }
    if(currentPage === 0) {
        arrowBtnLeft.style.opacity = '0'
        setTimeout(() => {arrowBtnLeft.style.display = 'none'}, 200)
        setTimeout(() => {logo.style.display = 'block'}, 200)
        setTimeout(() => {logo.style.opacity = '1';}, 220)
    }
}

// MOBILE //
document.addEventListener('scroll', () => {
    if(window.scrollY > 1) {
        header.classList.add('header-shrink');
        mobileMenu.style.top = '60px';
    }
    if(window.scrollY < 1 && mobileMenu.classList.contains('closed')) {
        header.classList.remove('header-shrink');
        mobileMenu.style.top = '80px';
    }
})

mobileMenuBtn.addEventListener('click', () => {
    if(mobileMenu.classList.contains('closed')) {
        openMobileMenu();
        return
    }
    closeMobileMenu();
})

function openMobileMenu() {
    mobileMenu.classList.remove('closed');
    mobileMenuBtn.classList.add('opened');
    header.classList.add('header-shrink');
    mobileMenu.style.top = '60px';
}

function closeMobileMenu() {
    mobileMenu.classList.add('closed');
    mobileMenuBtn.classList.remove('opened');
    header.classList.remove('header-shrink');
    mobileMenu.style.top = '80px';
}

document.addEventListener('click', (e) => {
    if(!mobileMenu.classList.contains('closed') && e.target !== mobileMenuBtn) {
        closeMobileMenu();
    }
})

headerLogo.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

const ObserveHome = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#home"] li').classList.add('active');
        }
        if (!entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#home"] li').classList.remove('active');
        }
    })
})
ObserveHome.observe(document.querySelector('.intersectionBar.iHome'));

const ObserveConhecimentos = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#conhecimentos"] li').classList.add('active');
        } 
        if (!entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#conhecimentos"] li').classList.remove('active');
        } 
    })
})
ObserveConhecimentos.observe(document.querySelector('.intersectionBar.iConhecimentos'));

const ObserveProjetos = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#projetos"] li').classList.add('active');
        } 
        if (!entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#projetos"] li').classList.remove('active');
        } 
    })
})
ObserveProjetos.observe(document.querySelector('.intersectionBar.iProjetos'));

const ObserveContato = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#contato"] li').classList.add('active');
        } 
        if (!entry.isIntersecting) {
            document.querySelector('.mobile-menu a[href="#contato"] li').classList.remove('active');
        } 
    })
})
ObserveContato.observe(document.querySelector('.intersectionBar.iContato'));