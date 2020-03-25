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
        element.innerText = innerText;
    }
    return element;
}


function AddHeader(){
    let headerKey = document.getElementById('headerKey');
    let headerValue = document.getElementById('headerValue');
    
    CreateElement("span", headerKey, id=null, innerText = "Key");
    CreateElement("input", headerKey, id="inputHeaderKey"+countOfHeader);

    CreateElement("span", headerValue, id=null, innerText = "Value");
    CreateElement("br", headerValue);
    CreateElement("input", headerValue, id="inputHeaderValue"+countOfHeader);
    CreateElement("br", headerValue);

    countOfHeader++;
}


function AddBody(){
    let bodyDiv = document.getElementById('bodyDiv');
    let bodyValue = document.getElementById('bodyValue');
    
    CreateElement("span", bodyDiv, id=null, innerText = "Key");
    CreateElement("input", bodyDiv, id="inputBodyKey"+countOfBody);

    CreateElement("span", bodyValue, id=null, innerText = "Value");
    CreateElement("br", bodyValue);
    CreateElement("input", bodyValue, id="inputBodyValue"+countOfHeader);
    CreateElement("br", bodyValue);

    countOfBody++;
}


function Send(){
  debugger
    let url = document.getElementById('urlInput').value;
    let verb = document.getElementById('verbs').value;
    let header = new Object();
    let body = new Object();

    for (i=0; i < document.getElementById('headerKey').getElementsByTagName("INPUT").length; i++){
        key = document.getElementById('inputHeaderKey'+i).value;
        value = document.getElementById('inputHeaderValue'+i).value;
        header[key] = value;
    }
    
    for (i=0; i < document.getElementById('bodyDiv').getElementsByTagName("INPUT").length; i++){
        key = document.getElementById('inputBodyKey'+i).value;
        value = document.getElementById('inputBodyValue'+i).value;
        body[key] = value;
    }

    FetchAPI(url, method= verb, data = body, deaders= header);

}


async function FetchAPI(url, method=null, data = {}, headers={}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {},
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
    resp = await response.json();
}

