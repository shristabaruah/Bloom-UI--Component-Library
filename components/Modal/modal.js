const modalDemoBtn = document.querySelector(".demo-btn");
const modalDemo =document.querySelector(".sample-modal");
const deleteBtn  =document.querySelector(".close-btn");
const stayBtn =document.querySelector(".stay-btn");

modalDemoBtn.addEventListener("click",()=>{
    modalDemo.classList.add('modal-active');
});

stayBtn.addEventListener("click",()=>{
    modalDemo.classList.add('modal-active');
});

deleteBtn.addEventListener("click",()=>{
    modalDemo.classList.remove('modal-active');
});