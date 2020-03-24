let countOfHeader = 0;
let countOfBody = 0;


function CreateElement(elementName, append=null, id=null){
    element = document.createElement(elementName);
    if (append !== null){
        append.appendChild(element);
    }
    if (id !== null){
        element.id = id;
    }
    return element;
}


function AddHeader(){
    let textKey = document.createTextNode('Key');
    let textValue = document.createTextNode('Value');
    let headerKey = document.getElementById('headerKey');
    let headerValue = document.getElementById('headerValue');
    
    createElement = CreateElement;
    
    createElement("span", headerKey);
    element.appendChild(textKey);
    createElement("input", headerKey, id="inputKey"+countOfHeader);

    createElement("span", headerValue);
    element.appendChild(textValue);
    element.after(document.createElement('br'));
    createElement("input", headerValue, id="inputValue"+countOfHeader);
    element.after(document.createElement('br'));
}

