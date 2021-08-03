//handle page type
function handlePage(choice) {
    sessionStorage.setItem("LATEST", choice); //save latest choice type into session storage

    //delete all content containers
    let mainContainer = document.querySelector(".main-container");
    let childContainer = document.querySelectorAll(".contentContainer2");
    for (let i = 0; i < childContainer.length; i++) { 
        mainContainer.removeChild(childContainer[i])
    }

    //call the load content function again to load the new page type content
    loadContent();
}

//text template
function addTextContent(title, desc) {
    let dropdownContainer = document.createElement('div');
    dropdownContainer.className = "contentDropdown";

    let details = document.createElement('details');
    details.className = "contentDetails";

    let summary = document.createElement('summary');
    summary.className = "contentSummary";
    summary.appendChild(document.createTextNode(title));

    details.appendChild(summary);
    details.appendChild(document.createTextNode(desc));

    dropdownContainer.appendChild(details);

    return dropdownContainer;
}

//photo template
function addImageContent(title, file) {
    let imageContainer = document.createElement('div');
    imageContainer.className = "contentImage";
    
    // create img
    let img = document.createElement('img');
    img.alt = title;
    img.src = "../images/"+file;
    
    imageContainer.appendChild(img);
    
    return imageContainer;
}

function loadContent () {
    //load page's content
    
    let container = document.querySelector(".main-container");
    let itemCounter = 1;

    //loop through all datalist items
    for (let i = 0; i < dataList2.length; i++) {
        let item = dataList2[i];

        let lastPageType = sessionStorage.getItem("LATEST");

        if (item.page != lastPageType)
            continue;

        itemCounter++;

        let contentContainer = document.createElement('div');
        contentContainer.className = "contentContainer2";

        let newTextContent = addTextContent(item.name, item.desc);
        contentContainer.appendChild(newTextContent);

        let newImageContent = addImageContent(item.name, item.imgName);
        contentContainer.appendChild(newImageContent);

        container.appendChild(contentContainer);
    }
    if (sessionStorage.getItem("LATEST") === null)
        sessionStorage.setItem("LATEST", "none");

    coolDown();
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

document.addEventListener('DOMContentLoaded', loadContent);