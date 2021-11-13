const nav_links = document.getElementById("lists")
const bars = document.getElementById("bars")

bars.addEventListener('click', () => {
    nav_links.classList.toggle("show")
    
})