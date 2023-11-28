'use strict';

function app() {
    let currentPage = 1;
    let currentCategory;
    const itemsPerPage = 4;
    const buttons = document.querySelectorAll('.type-of-goods_btn')
    const cards = document.querySelectorAll('.cards')
    const pages = document.querySelectorAll('.page-link');

    function setPage(page, offset) {
        if (page !== undefined) {
            currentPage = page;
        } else {
            currentPage += offset;
            const pagesTotal = Math.ceil(cards.length / itemsPerPage)
            if (currentPage < 0) {
                currentPage = 0;
            } else if (currentPage > pagesTotal) {
                currentPage = pagesTotal;
            }
        }
    }

    function filter (items) {
        items.slice((currentPage - 1 * itemsPerPage) ).forEach((item) => {
            const isItemFiltered = !item.classList.contains(currentCategory)
            const isShowAll = currentCategory === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide-filter')
            } else {
                item.classList.remove('hide-filter')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            currentCategory = button.dataset.filter
            // currentPage = 1; // Eсли нужно сбросить страницу при смене фильтра
            filter(cards)
        })
    })

    pages.forEach((link) => {
        link.addEventListener('click', () => {
            if (link.classList.contains('item-prev')) {
                setPage(undefined, -1);
            } else if(link.classList.contains('item-next')) {
                setPage(undefined, 1);
            } else {
                setPage(link.dataset.page);
            }
            filter(cards)
        })
    })
}