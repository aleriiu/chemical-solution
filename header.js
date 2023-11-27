'use strict';

const header = document.querySelector('.header-fixed');
const headerH = document.querySelector('.header-fixed').clientHeight;

const headerLogo = document.querySelector('.header-logo');
const seachBtn = document.querySelector('.header__nav-item_btn-input');
const nav = document.querySelector('.header__nav-item-list');
const burger = document.querySelector('.menu-button-container');

document.onscroll = function () {

    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('fixed');
        document.body.style.paddingTop = headerH + 'px';
        headerLogo.style.maxWidth = '150' + 'px';
        seachBtn.classList.add('input-padding');
        nav.style.display = 'none';
        burger.style.display = 'none';
    }

    else {
        header.classList.remove('fixed');
        document.body.removeAttribute('style');
        headerLogo.removeAttribute('style');
        seachBtn.classList.remove('input-padding');
        nav.removeAttribute('style');
        burger.removeAttribute('style');
    }
} 