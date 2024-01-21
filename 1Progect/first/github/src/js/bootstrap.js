function formTable(selector){
  var wrapper = document.querySelector(selector);
  var form = wrapper.getElementsByTagName("form")[0];
  var table = wrapper.getElementsByTagName("table")[0];
  
  form.onsubmit = function(ev){
    ev = ev || event;
    ev.preventDefault();
    
    var tr = document.createElement("tr"), td;
    
    for(let i = 0; i < 3; i++){
      td = document.createElement("td");
      td.innerHTML = this.elements[i].value;
      tr.appendChild(td);
    }    
    table.appendChild(tr);    
  }  
}
formTable(".wrapper");
