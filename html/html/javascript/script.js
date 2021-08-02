function formSubmitted(){
    alert("Form Submitted!");
}

//add a cooldown before calling the function
function coolDown(){
    setTimeout(revealFirstElement, 10);
}

//reveal first element of about me page
function revealFirstElement(){
    let firstElement = document.querySelector('.contentContainer2');
    firstElement.classList.add('reveal');
}

//reveal first element of about me page
let buttons = document.querySelectorAll('.buttons');
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", coolDown);
}

let active = localStorage.getItem("LATEST");
let activeButton = document.querySelector('.' + active);
if (activeButton != null)
    activeButton.setAttribute('style', 'opacity: 1;');



//nav bar hamburger
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

//scroll reveal
window.addEventListener('scroll', () => {
    let content2 = document.querySelectorAll('.contentContainer');
    for (let i = 0; i < content2.length; i++)
    {
        let contentPosition = content2[i].getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (contentPosition <= screenPosition){
            content2[i].classList.add('reveal');
        }
    }

    let content3 = document.querySelectorAll('.contentContainer2');
    for (let i = 0; i < content3.length; i++)
    {
        let contentPosition = content3[i].getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (contentPosition <= screenPosition){
            content3[i].classList.add('reveal');
        }
    }
});