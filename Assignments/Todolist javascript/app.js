var list = document.getElementById("list")

function addTodo(){
    var todo_item = document.getElementById("todo-item")
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);   
    li.appendChild(liText);
    list.appendChild(li);




    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","delbtn");
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText);
    li.appendChild(delBtn);


    // Create Edit button
    var editsBtn = document.createElement("button");
    var editsText = document.createTextNode("Edit");
    editsBtn.setAttribute("class","editBtn");
    editsBtn.setAttribute("onclick","editItem(this)")
    editsBtn.appendChild(editsText)
    li.appendChild(editsBtn)
    li.appendChild(delBtn);




    todo_item.value = "";

}


function deleteItem(e){
    e.parentNode.remove();
}

function deleteAll(e){
   list.innerHTML = " ";

}

function editItem(e){
    var val = prompt("Enter New Value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}


