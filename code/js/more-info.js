const strongDefense = document.getElementsByClassName("defense-section")
const dexEntry =  document.getElementsByClassName("nav-dexEntry")
console.log(strongDefense, dexEntry)

const openSection =() =>{
    dexEntry.classList.remove("hidden")
    backdrop.classList.remove("hidden")
    close.classList.remove("hidden")
}
const closeSection =() =>{
    dexEntry.classList.add("hidden")
    strongDefense.classList.add("hidden")
    close.classList.add("hidden")
}

strongDefense.addEventListener("click",openSection)
dexEntry.addEventListener("click", closeSection)
close.addEventListener("click",closeSection)