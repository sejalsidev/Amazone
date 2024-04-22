/* ---------------back-top--------------- */

const backtop = document.querySelector(".back-to-top");
backtop.addEventListener("click", () =>{ 
    window.scrollTo({
    top:0,
    behavior:"smooth"
});
}) 

const sidebar = document.querySelector(".sidebar");
/* console.log(sidebar); */
const cross = document.querySelector(".fa-xmark");
/* console.log(cross); */
const black = document.querySelector(".black");
/* console.log(black); */
const sidebtn = document.querySelector(".all");
sidebtn.addEventListener("click",() =>{ 
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    // document.body.classList.add("stop-scroll");
});

cross.addEventListener("click",() =>{ 
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
});

 
const sign = document.querySelector(".login-container");
/* console.log(sign); */
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");
sign.addEventListener("click", ()=> {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})

/* --------------popup menu---------------- */
const nav_address = document.querySelector(".nav-address border");
const closeModalBtn = document.querySelector(".close-btn");
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
closeModalBtn.addEventListener('click',togglePopup);
