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
    CreateElement("input", bodyValue, id="inputBodyValue"+countOfBody);
    CreateElement("br", bodyValue);

    countOfBody++;
}


async function Send(){
    let url = document.getElementById('urlInput').value;
    let verb = document.getElementById('verb').value.toUpperCase();
    let headerKeys = new Array();
    let headerValues = new Array();
    let bodyKeys = new Array();
    let bodyValues = new Array();
    
    let header = new Object();
    let body = new Object();

    let keyHeaders = document.getElementById('headerKey').children;
    let valueHeaders = document.getElementById('headerValue').children;
    for (i=0; i < keyHeaders.length; i++){
        if (keyHeaders[i].tagName == "INPUT")
            headerKeys.push(keyHeaders[i].value);
    }
    for (i=0; i < valueHeaders.length; i++){
        if (valueHeaders[i].tagName == "INPUT")
            headerValues.push(valueHeaders[i].value);
    }

    for (i=0; i < headerKeys.length; i++){
        header[headerKeys[i]] = headerValues[i];
    }

    let keyBodies = document.getElementById('bodyDiv').children;
    let valueBodies = document.getElementById('bodyValue').children;
    for (i=0; i < keyBodies.length; i++){
        if (keyBodies[i].tagName == "INPUT")
            bodyKeys.push(keyBodies[i].value);
    }
    for (i=0; i < valueBodies.length; i++){
        if (valueBodies[i].tagName == "INPUT")
            bodyValues.push(valueBodies[i].value);
    }

    for (i=0; i < bodyKeys.length; i++){
        body[bodyKeys[i]] = bodyValues[i];
    }

    fetchApi = await FetchAPI(url=url, method=verb, data=body, headers=headers);
    ShowingResults(fetchApi);
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


function ShowingResults(fetchApi){
    let table = CreateElement(
        elementName="table", 
        append=document.getElementById("showingResults"), 
        id="resultTable"
    );
    let tableTrTag = CreateElement(
        elementName="tr", 
        append=table, 
        id="trTag"
    );
  
    if (!Array.isArray(fetchApi)){
        fetchApi = [fetchApi];
    }

    keys = Object.keys(fetchApi[0]);
    for (i=0; i < keys.length; i++){
        CreateElement(
            elementName="td", 
            append=tableTrTag, 
            innerText=keys[i]
        )
    }

    for (j=0; j < fetchApi.length; j++){
        let row = table.insertRow(1);
        for (z=0; z < keys.length; z++){
            let cell_z = row.insertCell(z);
            cell_z.innerHTML = fetchApi[j][keys[z]];
        }
    }
}

