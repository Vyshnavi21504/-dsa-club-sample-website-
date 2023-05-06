burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
rightNav= document.querySelector('.rightNav')


burger.addEventListener('click' , ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})