$(document).ready(function(){
    var item = $('#contactButton');
    if (item)
    {
        $('#contactButton').click(function(){
            $('#contactForm').slideToggle(3000, "swing");
            console.log("DO");

        });
        $('.hob').click(function(){
            console.log("HO");
                sessionStorage.setItem("LATEST", "hobbies");
            });
        $('.port').click(function(){
                sessionStorage.setItem("LATEST", "portfolio");
            });
    }
 });

 $(document).ready(function(){
    var button = $('.buttons');
    if (button) 
    {
        $('.buttons').click(function(){
            $(this).animate({
               opacity: '1',
            });
            let buttons = document.getElementsByClassName("buttons");
            for (let i = 0; i < buttons.length; i++) {
               if (buttons[i] == this)
                  continue;
                  $(buttons[i]).animate({
                     opacity: '0.5',
                  });
            }
        });
    }
 });


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
    if (firstElement)
        firstElement.classList.add('reveal');
}

//reveal first element of about me page
let buttons = document.querySelectorAll('.buttons');
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", coolDown);
}

let active = sessionStorage.getItem("LATEST");
let activeButton = document.querySelector('.' + active);
if (activeButton != null)
    activeButton.setAttribute('style', 'opacity: 1;');


//Cycle through banner texts
var text = document.getElementById('text');
if (word)
    var word = text.getElementsByTagName('span');
var i = 0;

if (word)
{
    function Cycle() {
        word[i].style.display = 'none';
        i = (i + 1) % word.length;   
        word[i].style.display = 'initial';
    }
    setInterval(Cycle, 1000);
}

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