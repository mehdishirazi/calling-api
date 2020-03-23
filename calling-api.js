let verbCustomize = document.getElementById('verbs');
let headerTags = [];
verbCustomize.onclick = Custom_verb;


function Custom_verb(e){
    if (e.currentTarget.selectedIndex == "4"){
        let mainDiv = document.getElementById('app');
        let customVerb = document.getElementById('verbs');
        mainDiv.removeChild(customVerb);
        customVerb = document.createElement('INPUT');
        mainDiv.appendChild(customVerb);
        customVerb.className = "verb";
    }
}


function Send(){
    let verb = document.getElementById('verbs').value;
    let url = document.getElementById('item1').value;
  
}


function NewHeader(){
    headerTags = [];
  
    for (i=1; i < 3; i++){
        input_i = document.createElement('INPUT');    
        span_i = document.createElement('SPAN');
        br_i = document.createElement('br');
        input_i.id = "input_header" + i;
        headerTags.push(span_i);
        headerTags.push(input_i);
        headerTags.push(br_i);
    }

    let mybr = document.createElement('br');
    let header = document.getElementById('key');
    let head = document.getElementById('head');
    let key_value = document.getElementById('value');
    let btn = document.getElementById('btn');
    let text_key = document.createTextNode('Key');
    let text_value = document.createTextNode('Value');
  
    header.appendChild(headerTags[0]); 
    header.appendChild(headerTags[1]);
    header.appendChild(headerTags[2]);
    headerTags[0].appendChild(text_key);
    head.after(headerTags[0]);
    headerTags[0].after(headerTags[1]);
    headerTags[0].before(headerTags[2]);
    
    key_value.appendChild(headerTags[5]); 
    key_value.appendChild(mybr); 
    key_value.appendChild(headerTags[3]); 
    key_value.appendChild(headerTags[4]);
    headerTags[3].appendChild(text_value);
    btn.after(headerTags[3]);
    headerTags[3].after(headerTags[4]);
    headerTags[3].before(headerTags[5]);
    headerTags[4].before(mybr); 
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
