const cBoxLg = document.querySelector('.circles-box.bottomright.lg');
var timeOutFunctionId;

//RESET PAGE WHEN WINDOW IS RESIZED
function resizeListener() {
   body.style.transition = 'none';
   if(window.innerWidth < 768) {
      body.style.marginLeft = '0';
      arrowBtnLeft.style.opacity = '0'
      setTimeout(() => {arrowBtnLeft.style.display = 'none'}, 200)
      setTimeout(() => {logo.style.display = 'block'}, 200)
      setTimeout(() => {logo.style.opacity = '1';}, 220)
      document.querySelector('.header a.active').classList.remove('active');
      homeBtn.classList.add('active')
   }
}

//DISPLAY CIRCLE BOX FOR MOBILE WHEN WINDOW IS RESIZED
function resizeCBox() {
   const cBoxLgWidth = cBoxLg.offsetWidth;
   body.style.transition = 'none';
   if(window.innerWidth < 993) {
      cBoxLg.style.height = `${cBoxLgWidth}px`;
      cBoxLg.style.bottom = `-${cBoxLgWidth - 180}px`;
   }
   if(window.innerWidth > 992) {
      cBoxLg.style.height = null
      cBoxLg.style.bottom = null
   }
}

function workAfterResizeIsDone() {
   body.style.transition = '1s ease';
}

window.addEventListener('resize', function(e) {
    resizeCBox(e);
    resizeListener();
    clearTimeout(timeOutFunctionId);
    timeOutFunctionId = setTimeout(workAfterResizeIsDone, 500);
}, true);

document.addEventListener('DOMContentLoaded', () => {
   resizeCBox();
   body.style.transition = '1s ease';
})
