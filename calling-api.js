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
    let url = document.getElementById('urlInput').value;
    let verb = document.getElementById('verb').value;
    let headers = new Object();
    let body = new Object();

    for (i=0; i < document.getElementById('headerKey').getElementsByTagName("INPUT").length; i++){
        key = document.getElementById('inputHeaderKey'+i).value;
        value = document.getElementById('inputHeaderValue'+i).value;
        headers[key] = value;
    }
    
    for (i=0; i < document.getElementById('bodyDiv').getElementsByTagName("INPUT").length; i++){
        key = document.getElementById('inputBodyKey'+i).value;
        value = document.getElementById('inputBodyValue'+i).value;
        body[key] = value;
    }
    FetchAPI(url=url, method=verb, data=body, headers=headers);
}


async function FetchAPI(url, method="GET", data={}, headers={}) {
  const response = await fetch(url, {
    method: method,
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
    resp = await response.json();
  return resp;
}

