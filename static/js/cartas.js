const slider = document.querySelector("#slider");
let sliderSction = document.querySelectorAll(".sliderSection");
let ultimoSlide = sliderSction[sliderSction.length-1];

slider.insertAdjacentElement("afterbegin",ultimoSlide);

function Next(){
    let sliderSectionFrist = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend",sliderSectionFrist);
        slider.style.marginLeft = "-100%";
    },500)
}   


setInterval(function(){
    Next();
},2500)