let countOfHeader = 0;
let countOfBody = 0;


function CreateElement(elementName, append=null, id=null, innerText=null){
    element = document.createElement(elementName);
    if (append !== null){
        append.appendChild(element);
    }
    if (id !== null){
        element.id = id;
    }
    if (innerText !== null){
        element.innerText = textName;
    }
    return element;
}


function AddHeader(){
    let headerKey = document.getElementById('headerKey');
    let headerValue = document.getElementById('headerValue');
    
    CreateElement("span", headerKey, id=null, textName = "Key");
    CreateElement("input", headerKey, id="inputKey"+countOfHeader);

    CreateElement("span", headerValue, id=null, textName = "Value");
    CreateElement("br", headerValue);
    inputTag = CreateElement("input", headerValue, id="inputValue"+countOfHeader);
    CreateElement("br", headerValue);
}

