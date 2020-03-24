let countOfHeader = 0;
let countOfBody = 0;


function CreateElement(elementName, append, id=null){
    element = document.createElement(elementName);
    if (id !== null){
        element.id = id;
    }
    append.appendChild(element);
    return element;
}

function AddHeader(){
  debugger
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


function NewBody(){
    let tags = [];

    for (i=1; i < 3; i++){
        input_i = document.createElement('INPUT');    
        span_i= document.createElement('SPAN');
        br_i = document.createElement('br');
        input_i.id = "input_body" + i;
        tags.push(span_i);
        tags.push(input_i);
        tags.push(br_i);
    }

    let mybr = document.createElement('br');
    let body = document.getElementById('bodyDiv');
    let head = document.getElementById('body');
    let key_value = document.getElementById('btnDiv');
    let btn = document.getElementById('body_btn');
    let text_key = document.createTextNode('Key');
    let text_value = document.createTextNode('Value');
  
    body.appendChild(tags[0]); 
    body.appendChild(tags[1]);
    body.appendChild(tags[2]);
    tags[0].appendChild(text_key);
    head.after(tags[0]);
    tags[0].after(tags[1]);
    tags[0].before(tags[2]);
    
    key_value.appendChild(tags[5]); 
    key_value.appendChild(mybr); 
    key_value.appendChild(tags[3]); 
    key_value.appendChild(tags[4]);
    tags[3].appendChild(text_value);
    btn.after(tags[3]);
    tags[3].after(tags[4]);
    tags[3].before(tags[5]);
    tags[4].before(mybr); 
}


function Send(){
  debugger
    let method = document.getElementById('verbs').value;
    let url = document.getElementById('item1').value;
    let header = {};
    let body = {};
    let spin = document.getElementById("value").getElementsByTagName("input");
    
    for (i = 1; i <= spin.length; i++){
    let x = document.getElementById('input_header'+ i).value;
    }
}
