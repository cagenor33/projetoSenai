//================================================================================
// CAROSSEL BANNER HOME
//================================================================================


//Coletando as imagens do banner

 const img1 = "img/banner/bannerBoloTradicional2.png", 
                    "img/banner/Doces2.png", 
                    "img/banner/bannerBoloPersonal2.png"]  

const imgs = document.getElementById("banner");
const img = document.querySelectorAll("#banner img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    //document.querySelector('#banner').setAttribute('src', imagens[idx])
    //imgs.style.transform = `transLateX(${ - idx * 500 }px)`;
}

setInterval(carrossel, 1000);