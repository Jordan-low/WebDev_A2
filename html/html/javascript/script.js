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
    let screenPosition = window.innerHeight / 0.75;
    if (contentPosition <= screenPosition){
        content2[i].classList.add('reveal');
    }
});

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})