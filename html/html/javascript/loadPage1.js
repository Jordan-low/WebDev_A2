//text template
function addTextContent(title, desc, link, iD, latest) {
    let textContainer = document.createElement('div');
    textContainer.className = "contentText";

    // create h1 title
    let t = document.createElement("h1");
    t.appendChild( document.createTextNode(title) );
    
    textContainer.appendChild(t);
    
    // create p description
    let p = document.createElement("p");
    p.appendChild( document.createTextNode(desc) );
    
    textContainer.appendChild(p);
    
    //add button
    let newButtonContent = document.createElement('a');
    newButtonContent.className = "contentButton";
    newButtonContent.classList.add(latest);

    if (link != "")
        newButtonContent.href += "html/" + link;

    newButtonContent.appendChild(document.createTextNode("V"));
    newButtonContent.id = iD;

    textContainer.appendChild(newButtonContent);

    return textContainer;
}

//photo template
function addImageContent(title, file) {
    let imageContainer = document.createElement('div');
    imageContainer.className = "contentImage";
    
    // create img
    let img = document.createElement('img');
    img.alt = title;
    img.src = "images/"+file;
    
    imageContainer.appendChild(img);
    
    return imageContainer;
}

function loadContent () {
    //load page's content
    
    let container = document.querySelector(".main-container");

    //loop through all datalist items
    for (let i = 0; i < dataList.length; i++) {
        let item = dataList[i];
    
        let contentContainer = document.createElement('div');
        contentContainer.className = "contentContainer";
    
        //switch between text content on the left, image content on the right and vice versa
        if (i % 2 == 0)
        {
            let newTextContent = addTextContent(item.name, item.desc, item.buttonLink, item.id, item.latest);
            contentContainer.appendChild(newTextContent);

            let newImageContent = addImageContent(item.name, item.imgName);
            contentContainer.appendChild(newImageContent);
        }
        else
        {
            let newImageContent = addImageContent(item.name, item.imgName);
            contentContainer.appendChild(newImageContent);

            let newTextContent = addTextContent(item.name, item.desc, item.buttonLink, item.id, item.latest);
            contentContainer.appendChild(newTextContent);
        }

        container.appendChild(contentContainer);
    }
}
  
document.addEventListener('DOMContentLoaded', loadContent);