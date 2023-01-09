//================================================================================
// BANNER DINÂMICO HOME
//================================================================================

let idx = 0;

function carrossel(){
    if(idx == 0){
        document.querySelector('#bannerSite').setAttribute('src','./img/banner/bannerBoloTradicional2.png')
        document.querySelector('#bannerSite').style.width = "95vw";
        
    }else if (idx == 1){
        document.querySelector('#bannerSite').setAttribute('src','./img/banner/bannerBoloPersonal2.png')
        document.querySelector('#bannerSite').style.width = "95vw";
        
    }else if (idx == 2){
        document.querySelector('#bannerSite').setAttribute('src','./img/banner/Doces2.png') 
        document.querySelector('#bannerSite').style.width = "95vw";               
    } 

    idx++; 
    
    if (idx > 2){
        idx = 0
    } 
}    

setInterval(carrossel, 5000); //método executa a função após (tempo)  várias vezes até ser interrumpido

//================================================================================
// BANNER DINÂMICO HOME
//================================================================================

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))