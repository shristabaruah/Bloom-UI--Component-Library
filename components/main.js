const humburgerBtn = document.querySelector(".hamburger-icon");
const sidebar = document.querySelector(".sidebar-wrapper");
const container = document.querySelector(".conatiner");

humburgerBtn.addEventListener("click",()=>{
    sidebar.classList.add("slide-on");
    sidebar.classList.remove("slide-off");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})

function closeDrawer(){
    sidebar.classList.remove("slide-on");
    sidebar.classList.add("slide-off");
    document.body.style.backgroundColor = "#ffffff";
}

container.addEventListener("click",closeDrawer)
