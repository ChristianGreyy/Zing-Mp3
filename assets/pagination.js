const menuListItem = document.querySelectorAll('.menu__list-item');
let page = document.querySelectorAll('.page__page-items');

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

const solveDontCreate = () => {
    let html = `
        <div class="app-message">
            <div class="app-message__side">

            </div>
            <div class="app-message__bell">
                <i class="fas fa-bell"></i>
            </div>
            <div class="app-message__text">
                <div class="app-message__text-title">
                    Thông báo
                </div>
                <div class="app-message__text-content">
                    Tính năng chưa được cập nhật !!
                </div>
            </div>
            <div class="app-message__close">
                <i class="fas fa-times"></i>
            </div>
        </div>
    `
    $('.app').append(html);

    const myTimeOut = setTimeout(() =>{
        document.querySelectorAll('.app-message').forEach(item => {
            item.style.display = 'none';
        })
        // document.querySelector('.app-message').style.display = 'none';
    },3000);

    // myTimeOut();
}

let indexSideBar = 0;

for(let i in menuListItem) {
    menuListItem[i].onclick = (e) => {
        if(+i === 4 || +i === 6 || +i === 8 || +i === 9) {
            solveDontCreate();
        } else {
            resetPage(page);
            menuListItem[i].classList.add('menu__list-item--active');
            let pageNumber = menuListItem[i].classList[1][17];
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
            if(currentPage) {
                currentPage.style.display = 'block';
            }
        }
    }
}
