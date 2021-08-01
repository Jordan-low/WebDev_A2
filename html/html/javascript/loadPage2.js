//handle page type
function handlePage(choice) {
    localStorage.setItem("CHOICE", choice); //save choice type into local storage

    //delete all content containers
    let mainContainer = document.querySelector(".main-container");
    let childContainer = document.querySelectorAll(".contentContainer");
    for (let i = 0; i < childContainer.length; i++) { 
        mainContainer.removeChild(childContainer[i])
    }

    //call the load content function again to load the new page type content
    loadContent();
}

//text template
function addTextContent(title, desc) {
    let textContainer = document.createElement('div');
    textContainer.className = "contentText";

    // create h1 title
    let t = document.createElement("h1");
    t.appendChild( document.createTextNode(title) );
    
    textContainer.appendChild( t );
    
    // create p description
    let p = document.createElement("p");
    p.appendChild( document.createTextNode(desc) );
    
    textContainer.appendChild( p );

    return textContainer;
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
        let pageType = localStorage.getItem("CHOICE");

        if (item.page != pageType)
            continue;

        itemCounter++;
        let contentContainer = document.createElement('div');
        contentContainer.className = "contentContainer";

        //switch between text content on the left, image content on the right and vice versa
        if (itemCounter % 2 == 0)
        {
        let newTextContent = addTextContent(item.name, item.desc);
        contentContainer.appendChild(newTextContent);

        let newImageContent = addImageContent(item.name, item.imgName);
        contentContainer.appendChild(newImageContent);
        }
        else
        {
        let newImageContent = addImageContent(item.name, item.imgName);
        contentContainer.appendChild(newImageContent);

        let newTextContent = addTextContent(item.name, item.desc);
        contentContainer.appendChild(newTextContent);
        }

        container.appendChild(contentContainer);
    }
    localStorage.setItem("CHOICE", 'hobby'); //default back to first page type
}
  
document.addEventListener('DOMContentLoaded', loadContent);