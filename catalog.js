'use strict';

const cards = document.querySelector('.cards');
const cardsList = document.querySelector('.cards-container_list');
const layoutBtn = document.querySelector('.type-of-goods_btn');
const listBtn = document.querySelector('.type-of-goods_btn-list');
const layoutImg = document.querySelector('.layout-image');
const listImg = document.querySelector('.list-image');

listBtn.addEventListener ('click', () => {
    cards.style.display = 'none';
    cardsList.style.display = 'block';
    listImg.src = 'images/catalog-icon-list.png';
    layoutImg.src = 'images/catalog-icon-layout.png';

});

layoutBtn.addEventListener ('click', () => {
    cardsList.style.display = 'none';
    cards.style.display = 'flex';
    listImg.src = 'images/list-icon-grey.png';
    layoutImg.src = 'images/layout-icon-orange.png';
})


const rangeBtn = document.querySelector('.info-nav_range');
const infoRange = document.querySelector('.info-links__nav_range');

rangeBtn.addEventListener ('click', () => {
    if(infoRange.style.display != 'flex') {
        infoRange.style.display = 'flex';
    }

    else {
        infoRange.style.display = 'none';
    }
    
});
