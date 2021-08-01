function formSubmitted(){
    alert("Form Submitted!");
}

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
       nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
       nav.removeAttribute("style");
   }
}

window.addEventListener('scroll', () => {
    let content2 = document.querySelectorAll('.scrollReveal');
    let contentPosition = content2[i].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition <= screenPosition){
        content2[i].classList.add('reveal');
    }
});