const homePage = document.querySelector('#home');
const homeSubtitle = document.querySelector('#home .title-md');
const homeTitle = document.querySelector('#home .home-title');
const homeSubtext = document.querySelector('#home .home-subtext');
const homeButton = document.querySelector('#home .home-btn');
const iconBarOne = document.querySelector('#home .icon-bar.one');
const iconBarTwo = document.querySelector('#home .icon-bar.two');
const iconBarThree = document.querySelector('#home .icon-bar.three');
const iconBarFour = document.querySelector('#home .icon-bar.four');

//ANIMATIONS
function iconBarAppear() {
    iconBarOne.classList.add('iconBarOne');
    iconBarTwo.classList.add('iconBarTwo');
    iconBarThree.classList.add('iconBarThree');
    iconBarFour.classList.add('iconBarFour');
    iconBarOne.classList.remove('opacity-0');
    iconBarTwo.classList.remove('opacity-0');
    iconBarThree.classList.remove('opacity-0');
    iconBarFour.classList.remove('opacity-0');
}

// 0 = fadeUp // 1 = fadeIn // 2 = fadeDown
function fade(element, numb) {
    if(numb === 0) {
        element.classList.add('fadeUp');
        element.classList.remove('opacity-0');
        element.classList.remove('opacity-0-noAnimation');
    }
    if(numb === 1) {
        element.classList.add('fadeIn');
        element.classList.remove('opacity-0');
        element.classList.remove('opacity-0-noAnimation');
    }
    if(numb === 2) {
        element.classList.add('fadeDown');
        element.classList.remove('opacity-0');
        element.classList.remove('opacity-0-noAnimation');
    }
}

function removeFade(element, numb) {
    if(numb === 0) {
        element.classList.remove('fadeUp');
        element.classList.add('opacity-0');
    }
    if(numb === 1) {
        element.classList.remove('fadeLeft');
        element.classList.add('opacity-0');
    }
    if(numb === 2) {
        element.classList.remove('fadeDown');
        element.classList.add('opacity-0');
    }
}

function iconBarDisappear() {
    iconBarOne.classList.remove('iconBarOne');
    iconBarTwo.classList.remove('iconBarTwo');
    iconBarThree.classList.remove('iconBarThree');
    iconBarFour.classList.remove('iconBarFour');
    iconBarOne.classList.add('opacity-0');
    iconBarTwo.classList.add('opacity-0');
    iconBarThree.classList.add('opacity-0');
    iconBarFour.classList.add('opacity-0');
}

function typeTextAnimation(el, txt) {
    if(el.innerText.length > 2) return;
    const text = txt
    const textArr = text.split('');
    textArr.forEach((letter, index) => {
        setTimeout(() => {
            el.innerHTML += letter;
        }, 60 * index);
    })
}

//HOME PAGE ANIMATIONS
const insertText = document.querySelector('.home-subtext');

const homeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fade(homeSubtitle, 0)
            setTimeout(() => { fade(homeTitle, 0); }, 500);
            setTimeout(() => { fade(homeButton, 2); }, 500);
            setTimeout(() => { typeTextAnimation(insertText, '<!-- SOU DESENVOLVEDOR WEB - FRONT-END -->'); }, 1200);

            iconBarAppear();
        }
        if (!entry.isIntersecting) {
            removeFade(homeSubtitle, 0);
            removeFade(homeTitle, 0);
            removeFade(homeButton, 2);

            iconBarDisappear();
        }
    })
})
homeObserver.observe(document.querySelector('.home-footer'));


//SECTION SKILLS ANIMATIONS
const secSkillsTag = document.querySelector('.conhecimentos .section-tag');
const secSkillsTagObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => { typeTextAnimation(secSkillsTag, '/* CONHECIMENTOS */'); }, 1200);
        };
    });
});
secSkillsTagObserver.observe(secSkillsTag);

const skillPercentageObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
       if (entry.isIntersecting) {
         let percentageObj = {htmlcss: 100, javascript: 90, bootstrap: 80, sass: 80, wordpress: 40, git: 90, react: 40, typescript: 30, mysql: 5};

         document.querySelectorAll('.skill-item-bar-inner').forEach(item => {
            let itemId = item.id;
            item.style.width = `${percentageObj[itemId]}%`
         })
       };

       if(!entry.isIntersecting) {
         document.querySelectorAll('.skill-item-bar-inner').forEach(item => {
            item.style.width = `0`
         })
       }
   });
});

skillPercentageObserver.observe(document.querySelector('.skills-container .col.right'));