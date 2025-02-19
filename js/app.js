const hamburgerBtn = document.querySelector('.wrapper-1-header-hamburger');
const menuList = document.querySelector('.wrapper-1-header-nav-list')
const menuItems = document.querySelectorAll('.wrapper-1-header-nav-list-item')


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('hamburger-active');
    menuList.classList.toggle('nav-active')
})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('hamburger-active');
        menuList.classList.toggle('nav-active')
    })
})
