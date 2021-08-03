 //PAGE 1 ANIMATIONS
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

 //PAGE 2 ANIMATIONS
 $(document).ready(function(){
    var button = $('.buttons');
    if (button) 
    {
        $('.buttons').click(function(){
            //animate the pressed (active) button
            $(this).animate({
               opacity: '1',
               width: '25vw'
            });

            //reset the rest of the buttons to default
            let buttons = document.getElementsByClassName("buttons");
            for (let i = 0; i < buttons.length; i++) {
               if (buttons[i] == this) //check if its the currently active button, then ignore
                  continue;
                  $(buttons[i]).animate({
                     opacity: '0.5',
                     width: '20vw'
                  });
            }
        });
    }
 });



function formSubmitted(){
    let contactForm = document.getElementById("form");
    var formData = new FormData(contactForm);
    alert("Hello " + formData.get('name-field') + "! Your form has been submitted!");
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


//set active section for about me page
let active = sessionStorage.getItem("LATEST");
if (active === null)
    active = "hobbies";
let activeButton = document.querySelector('.' + active);
if (activeButton != null)
    activeButton.setAttribute('style', 'opacity: 1;');


//Cycle through banner texts
var text = document.getElementById('text');
var count = 0;
if (text)
    var word = text.getElementsByTagName('span');

if (word)
{
    function Cycle() {
        word[count].style.display = 'none';
        count = (count + 1) % word.length;   
        word[count].style.display = 'initial';
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


function pageVisitedCounter(){
    if (localStorage.getItem("VISITED") === null)
        localStorage.setItem("VISITED", 0);

    let pageVisitCount = +localStorage.getItem("VISITED") + 1;
    localStorage.setItem("VISITED", pageVisitCount);

    let updatePageText = document.getElementById("pageVisited");
    updatePageText.append("You've visited this website " + pageVisitCount + " times");
}

document.addEventListener('DOMContentLoaded', pageVisitedCounter);