let countOfHeader = 0;
let countOfBody = 0;


function CreateElement(elementName, append=null, id=null){
    element = document.createElement(elementName);
    if (appen !== null){
        append.appendChild(element);
    }
    if (id !== null){
        element.id = id;
    }
    return element;
}


function AddHeader(){
    let text_key = document.createTextNode('Key');
    let text_value = document.createTextNode('Value');
    let header = document.getElementById('headerKey');
    let head = document.getElementById('header');
    let value = document.getElementById('headerValue');
    let value_br = document.createElement('br');
    let input_br = document.createElement('br');
    
    CreateElement("span", header);
    element.appendChild(text_key);
    CreateElement("input", header, id="inputKey"+countOfHeader);

    CreateElement("span", value);
    element.appendChild(text_value);
    element.after(value_br);
    CreateElement("input", value, id="inputValue"+countOfHeader);
    element.after(input_br);
}

