const slider=document.querySelector(".slider");
const sliderValue=document.querySelector(".slider-value");
sliderValue.innerText=slider.value;
slider.oninput = (e) =>{
    sliderValue.innerText=e.target.value;
}
