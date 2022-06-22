const btnMenu =  document.querySelector(".icon-menu");
const menu =  document.querySelector(".navbar");



if(btnMenu){
    btnMenu.addEventListener("click",function(){
        menu.classList.toggle("visiblemenu");        
    });
}