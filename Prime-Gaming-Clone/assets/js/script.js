function backTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function openProfile() {
    let menu = document.querySelector(".p-o");
    let arrow = document.querySelector(".header-arrow--right.profile");

    document.querySelector(".l-o").style.display='none';
    document.querySelector('.header-arrow--right.lang').style.rotate='0deg';

    if(menu.style.display == "block") {
        menu.style.display='none';
        arrow.style.rotate='0deg';
    } else {
        menu.style.display='block';
        arrow.style.rotate='180deg';
    };
};

function openLang() {
    let menu = document.querySelector(".l-o");
    let arrow = document.querySelector(".header-arrow--right.lang");

    document.querySelector(".p-o").style.display='none';
    document.querySelector('.header-arrow--right.profile').style.rotate='0deg';

    if(menu.style.display == "block") {
        menu.style.display='none';
        arrow.style.rotate='0deg';
    } else {
        menu.style.display='block';
        arrow.style.rotate='180deg';
    };
};

document.querySelectorAll('.l-o--container .a').forEach((i) => {
    i.addEventListener('click', () => {
        document.querySelector('.l-o--container .a.selected').classList.remove('selected');
        i.classList.add('selected');
    });
});

document.querySelectorAll('.doubts--container-content').forEach((i) => {
    let item = i.querySelector('.doubts--container-content-top');
    item.addEventListener('click', () => {
        let text = i.querySelector('.doubts--container-content-bottom');

        if(text.style.display == 'block'){
            text.style.display = 'none';
            i.style.background = '#2c2541';
        } else {
            text.style.display = 'block';
            i.style.background = '#392e5c';
        };
    });
});

document.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
    })
})

document.onclick = function(e) {
    if(e.target.id !== 'lang' && e.target.id !== 'prof' && e.target.id !== 'langIcon' && e.target.id !== 'langText' && e.target.id !== 'langArrow' && e.target.id !== 'profIcon' && e.target.id !== 'profText' && e.target.id !== 'profArrow'){
        document.querySelector(".l-o").style.display='none';
        document.querySelector('.header-arrow--right.lang').style.rotate='0deg';
        document.querySelector(".p-o").style.display='none';
        document.querySelector('.header-arrow--right.profile').style.rotate='0deg';
    }
}


let totalSlides = document.querySelectorAll('.slider-item').length;
document.querySelector('.slider-width').style.width = `calc(${totalSlides} * 296px)`;

let currentSlide = 0;
function goNext() {
    currentSlide++;
    let lastItem = document.getElementById('last-item');
    let rect = lastItem.getBoundingClientRect();
    if(rect.right < window.innerWidth){
        currentSlide = 0;
    }
    updateMargin();
}
function goPrev() {
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = 0;
    }
    updateMargin();
}
function updateMargin() {
    let newMargin = currentSlide * 296;
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

document.querySelector('.slider-button.right').addEventListener('mousedown', () => {
    let btn = document.querySelector('.slider-button.right');
    btn.style.boxShadow = '0 0 3px white'
})
document.querySelector('.slider-button.right').addEventListener('mouseup', () => {
    let btn = document.querySelector('.slider-button.right');
    btn.style.boxShadow = '0 0 0px white'
})

document.querySelector('.slider-button.left').addEventListener('mousedown', () => {
    let btn = document.querySelector('.slider-button.left');
    btn.style.boxShadow = '0 0 3px white'
})
document.querySelector('.slider-button.left').addEventListener('mouseup', () => {
    let btn = document.querySelector('.slider-button.left');
    btn.style.boxShadow = '0 0 0px white'
})

document.addEventListener('mouseup', () => {
    let btn = document.querySelector('.slider-button.left');
    btn.style.boxShadow = '0 0 0px white'
    let btn2 = document.querySelector('.slider-button.right');
    btn2.style.boxShadow = '0 0 0px white'
})