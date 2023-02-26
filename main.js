let searchBtn = document.querySelector("#search-btn")
let searchBar = document.querySelector(".search-bar-container")

let formBtn = document.querySelector("#login-btn")
let loginForm = document.querySelector(".login-form-cont")
let Formcls = document.querySelector("#form-close")

let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

let videoBtn = document.querySelectorAll('.vid-btn')

window.onscroll = () =>{
    searchBtn.classList.remove("fa-times")
    searchBar.classList.remove("active")
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
    loginForm.classList.remove("active")
}

menu.addEventListener('click',()=>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})

searchBtn.addEventListener("click", ()=>{
    searchBtn.classList.toggle("fa-times")
    searchBar.classList.toggle("active")
});

formBtn.addEventListener("click", ()=>{
    loginForm.classList.add("active")
});

Formcls.addEventListener("click", ()=>{
    loginForm.classList.remove("active")
});

videoBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
});

var swiper = new Swiper(".mySwiper", {
    spaceBeetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnIneraction:false,
    },
    breakpoints:{
        640:{
            slidesPreView: 1,
        },
        768:{
            slidesPreView: 2,
        },
        1024:{
            slidesPreView: 3,
        }
    }
  });