const menuSidbarItemList = document.querySelectorAll('.menu-sidebar__item')

menuSidbarItemList.forEach(item => {
    item.addEventListener('click', () => {
        menuSidbarItemList.forEach(item => {
            item.classList.remove('menu-sidebar__item_active')
        });

        item.classList.toggle('menu-sidebar__item_active')
    })
});