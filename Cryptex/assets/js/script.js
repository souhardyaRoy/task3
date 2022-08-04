const addEventonElem= (elem,type,callback)=>{
    console.log('I am here')
    if(elem.length>1){
        for(let i=0;i<elem.length;i++){
            elem[i].addEventListener(type,callback)
        }
    } else{
        elem.addEventListener(type,callback)
    }
}
const navbar=document.querySelector("[data-navbar]");
const navbarLinks= document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler");

const toggleNavbar =()=>{
    console.log('toggle')
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}
addEventonElem(navToggler,"click",toggleNavbar);

const closeNavbar =()=>{
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}
addEventonElem(navbarLinks,"click",closeNavbar);
const header=document.querySelector("[data-header]");
const activeNavbar = function(){
if(window.scrollY>300){
    header.classList.add("active")
}else{
    header.classList.remove("active")
}
}
addEventonElem(window,"scroll",activeNavbar);