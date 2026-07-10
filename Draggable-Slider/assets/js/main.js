"use strict";
var slide = document.querySelector('.slider-inner');
var firstImg = document.querySelectorAll('.slider-inner img')[0];
var imgs = document.querySelectorAll('.slider-inner img');
var arrowIcons = document.querySelectorAll('.slider i');
var isDragStart = false;
var prevPageX;
var prevScrollLeft;
var positionDiff;
var isDragging = false;
arrowIcons.forEach(function (i) {
    i.addEventListener('click', function () {
        slide.scrollLeft += i.id == 'left' ? -(firstImg.clientWidth + 20) : (firstImg.clientWidth + 20);
    });
});
var dragStart = function (e) {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slide.scrollLeft;
    slide.classList.add('dragging');
};
var dragging = function (e) {
    if (!isDragStart)
        return;
    e.preventDefault();
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slide.scrollLeft = prevScrollLeft - positionDiff;
    isDragging = true;
};
var dragStop = function () {
    isDragStart = false;
    slide.classList.remove('dragging');
    if (!isDragging)
        return;
    isDragging = false;
    autoSlide();
};
var autoSlide = function () {
    if (slide.scrollLeft === (slide.scrollWidth - slide.clientWidth))
        return;
    if (slide.scrollLeft === 0)
        return;
    positionDiff = Math.abs(positionDiff);
    var firstImgWidth = (firstImg.clientWidth + 20);
    var valDifference = firstImgWidth - positionDiff;
    if (slide.scrollLeft > prevScrollLeft) {
        return slide.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    return slide.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};
slide.addEventListener('mousedown', dragStart);
slide.addEventListener('touchstart', dragStart);
slide.addEventListener('mousemove', dragging);
slide.addEventListener('touchmove', dragging);
slide.addEventListener('mouseup', dragStop);
slide.addEventListener('touchend', dragStop);
slide.addEventListener('mouseleave', dragStop);
imgs.forEach(function (i) {
    i.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });
});
//# sourceMappingURL=main.js.map