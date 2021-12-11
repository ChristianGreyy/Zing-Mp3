const menuListItem = document.querySelectorAll('.menu__list-item');
let page = document.querySelectorAll('.page__page-items');

console.log(menuListItem);

const resetPage = (page) => {
    page.forEach(pageItem => {
        pageItem.style.display = 'none';
    })
    document.querySelector('.page__page-3__overlay').style.display = 'none';
    document.querySelector('.page__page-3__alpha').style.display = 'none';
    document.querySelector('.page__page-3__alpha2').style.display = 'none';

    document.querySelector('.page__page-6__overlay').style.display = 'none';
    document.querySelector('.page__page-6__alpha').style.display = 'none';
    document.querySelector('.page__page-6__alpha2').style.display = 'none';

    menuListItem.forEach(menuItem => menuItem.classList.remove('menu__list-item--active'));

}

menuListItem.forEach(menuItem => {
    menuItem.onclick = (e) => {
        resetPage(page);
        menuItem.classList.add('menu__list-item--active');
        let pageNumber = menuItem.classList[1][17];
        let classPage = "page__page-";
        classPage += pageNumber;
        if(pageNumber === '3' || pageNumber === '4') {
            document.querySelector('.page__page-3__overlay').style.display = 'block';
            document.querySelector('.page__page-3__alpha').style.display = 'block';
            document.querySelector('.page__page-3__alpha2').style.display = 'block';
        } else if(pageNumber === '6') {
            document.querySelector('.page__page-6__overlay').style.display = 'block';
            document.querySelector('.page__page-6__alpha').style.display = 'block';
            document.querySelector('.page__page-6__alpha2').style.display = 'block';
        }
        currentPage = document.querySelector('.'.concat(classPage));
        currentPage.style.display = 'block';
        // console.log(currentPage);
    }
})