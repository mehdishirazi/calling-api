let countOfHeader = 0;
let countOfBody = 0;


function CreateElement(elementName, append=null, id=null, innerText=null, className=null){
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
    if (className !== null){
        element.className = className;
    }
    return element;
}


function AddHeader(){
    let headerKey = document.getElementById('headerKey');
    let headerValue = document.getElementById('headerValue');
    
    CreateElement("span", headerKey, id="spanHeaderKey"+countOfHeader, innerText = "Key");
    CreateElement("input", headerKey, id="inputHeaderKey"+countOfHeader);

    CreateElement("span", headerValue, id="spanHeaderValue"+countOfHeader, innerText = "Value");
    CreateElement("br", headerValue);
    CreateElement("input", headerValue, id="inputHeaderValue"+countOfHeader, innerText=null);
    let btn = CreateElement(
        elementName="button", 
        append=headerValue, 
        id="btnHeader"+countOfHeader,
        innerText="Delete",
        className="deleteBtn"
    )
    btn.onclick = SelectedRow;
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
    let headers = new Object();
    let body = new Object();

    let headerKeys = document.querySelectorAll('[id^="inputHeaderKey"]'); 
    headerKeys = Array.prototype.slice.call(headerKeys).sort();
    let headerValues = document.querySelectorAll('[id^="inputHeaderValue"]');
    headerValues = Array.prototype.slice.call(headerValue).sort();
    for (i=0; i < headerKeys.length; i++){
        headers[headerKeys[i].value] = headerValues[i].value;
    }

    let bodyKeys = document.querySelectorAll('[id^="inputBodyKey"]'); 
    bodyKeys = Array.prototype.slice.call(bodyKeys).sort();
    let bodyValues = document.querySelectorAll('[id^="inputBodyValue"]');
    bodyValues = Array.prototype.slice.call(bodyValue).sort();
    for (i=0; i < bodyKeys.length; i++){
        body[bodyKeys[i].value] = bodyValues[i].value;
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


function SelectedRow(e){
  debugger
    let selected = e.currentTarget.id.slice(3, 9);
    let selectedNumber = e.currentTarget.id.slice(9, e.currentTarget.id.length);
    let selectedItems = [];
    
    if (selected == "Header"){
        selectedItems.push(document.getElementById("headerKey"));
        selectedItems.push(document.getElementById("headerValue"));
        selectedItems.push(document.getElementById("spanHeaderKey"+selectedNumber));
        selectedItems.push(document.getElementById("inputHeaderKey"+selectedNumber));
        selectedItems.push(document.getElementById("inputHeaderValue"+selectedNumber));
        selectedItems.push(document.getElementById("spanHeaderValue"+selectedNumber));
        selectedItems.push(document.getElementById("btnHeader"+selectedNumber));
    }
    
    RemoveElements(selectedItems);
}


function RemoveElements(items){
  debugger
    let keyParent = items[0];
    let valueParent = items[1];
    keyParent.removeChild(items[2]);
    keyParent.removeChild(items[3]);
    valueParent.removeChild(items[4]);
    valueParent.removeChild(items[5]);
    valueParent.removeChild(items[6]);
}

