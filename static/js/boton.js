document.getElementById("go_top_cont").addEventListener("click", scrollup);

function scrollup(){
    var currentscroll = document.documentElement.scrollTop;
    if(currentscroll > 0){
        window.scrollTo (0, 0);
        botonUp.style.transform= "scale(0)";
    }
}

botonUp= document.getElementById("go_top_cont");

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if (scroll > 500){
        botonUp.style.transform= "scale(1)";
    }else if (scroll < 500){
        botonUp.style.transform= "scale(0)";
    }
}

