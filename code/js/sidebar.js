const nav_btn = document.getElementsByClassName("nav-btn")
const modal =  document.getElementsByClassName("nav-modal")
const backdrop =  document.getElementsByClassName("backdrop")
const close = document.getElementsByClassName("close-nav-btn")
console.log(nav_btn, modal)

const openModal =() =>{
    modal[0].classList.remove("hidden")
    backdrop[0].classList.remove("hidden")
    close.classList.remove("hidden")
}
const closeModal =() =>{
    modal[0].classList.add("hidden")
    backdrop[0].classList.add("hidden")
    close.classList.add("hidden")
}

nav_btn[0].addEventListener("click",openModal)
backdrop[0].addEventListener("click", closeModal)
close[0].addEventListener("click",closeModal)