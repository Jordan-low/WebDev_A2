 //PAGE 1 ANIMATIONS AND BUTTON EVENTS
$(document).ready(function(){
    var item = $('#contactButton');
    if (item)
    {
        $('#contactButton').click(function(){
            $('#contactForm').slideToggle(3000, "swing");
        });
        $('.hob').click(function(){
                sessionStorage.setItem("LATEST", "hobbies"); //update session storage info
            });
        $('.port').click(function(){
                sessionStorage.setItem("LATEST", "portfolio"); //update session storage info
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
               width: '35vw'
            });

            //reset the rest of the buttons to default
            let buttons = document.getElementsByClassName("buttons");
            for (let i = 0; i < buttons.length; i++) {
               if (buttons[i] == this) //check if its the currently active button, then ignore
                  continue;
                  $(buttons[i]).animate({
                     opacity: '0.5',
                     width: '25vw'
                  });
            }
        });
    }
 });

//contact form submitted event
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
    activeButton.setAttribute('style', 'opacity: 1; width: 35vw;'); //set active section button


//cycle through and type writer for banner text (page 1)
var text = document.getElementById('text');
var count = 0;
var i = 0;
if (text)
    var word = text.getElementsByTagName('span');

if (word)
{
    let string = "";
    setInterval(Cycle, 2000); //cycle through the text every 2 sec
    function Cycle() {
        word[count].style.display = 'none';
        count = (count + 1) % word.length;
        word[count].style.display = 'initial';
        console.log("cycled");
        StartType();
    }
    
    function Write(){
        if (i < string.length) //check if the line has been fully typed out
        {
            word[count].innerHTML += string.charAt(i); //write the characters into the html
            console.log("added " + string.charAt(i));
            i++;
            setTimeout(Write, 100);
        }
    }
    
    function StartType(){
        i = 0;
        string = word[count].innerHTML; //store initial text in a string
        console.log(string);
        word[count].innerHTML = ""; //delete html text
        Write();
    }
}


//nav bar hamburger
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle); //check for nav bar onclick event

function navToggle() {
   navToggler.classList.toggle("active"); //toggle active/inactive
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open"); //toggle open/close
   if(nav.classList.contains("open")){
       nav.style.maxHeight = nav.scrollHeight + "px"; //if its active, increase the height
   }
   else{
       nav.removeAttribute("style"); //else, remove and reset the style
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

//update page visited counter on loading the website (local storage)
function pageVisitedCounter(){
    //check if type writer exists on the current page
    var text = document.getElementById('text');
    if (text)
        var word = text.getElementsByTagName('span');
    if (word)
        StartType();

    //check if user has visited this website before, if no, set the default value to 0
    if (localStorage.getItem("VISITED") === null)
        localStorage.setItem("VISITED", 0);

    //increase and update the page visited count
    let pageVisitCount = +localStorage.getItem("VISITED") + 1;
    localStorage.setItem("VISITED", pageVisitCount);

    let updatePageText = document.getElementById("pageVisited");
    updatePageText.append("You've visited this website " + pageVisitCount + " times");
}

document.addEventListener('DOMContentLoaded', pageVisitedCounter);