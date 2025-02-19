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




function sendMail() {
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let company= document.getElementById('company').value;
        let phone= document.getElementById('phone').value;
        let email= document.getElementById('email').value;
        let msg= document.getElementById('msg').value;
    let parms = {
        name: name,
        surname: surname,
        company: company,
        phone: phone,
        email: email,
        msg: msg,
    }
   
     emailjs.send('service_3nlzem9','template_i47c6g7',parms).then(alert('Email geschickt!'))


    
}