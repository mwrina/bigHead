let aberto = true;

closeNav();

document.querySelector('#menu').addEventListener('click', () => {
    if(aberto == false) {
        openNav();
    } else {
        closeNav();
    }
})

function openNav() {
    document.querySelector(".mobileSidebar").style.width = "25%";
    document.querySelector(".colLinks").style.display = "flex";
    document.querySelector(".mobileSidebar").style.height = "25%";
    aberto = !aberto;
}
  
function closeNav() {
    document.querySelector(".mobileSidebar").style.width = "fit-content";
    document.querySelector(".colLinks").style.display = "none";
    document.querySelector(".mobileSidebar").style.height = "fit-content";
    aberto = !aberto;
}