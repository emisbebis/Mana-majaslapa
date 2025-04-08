// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
const addButton = document.querySelector('#addButton');
const inputTask = document.querySelector('#inputTask');
const taskList = document.querySelector('#taskList');
const form = document.querySelector('#taskForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const task = inputTask.value;
    if (!task) {
        alert('Please write down a task');
    } else {
        const newLi = document.createElement('li');
        newLi.innerText = task;
        newLi.setAttribute('li', 'readonly');
        taskList.append(newLi);
        
        // this is the delete button:
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "delete";
        newLi.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleting)

        // this is the edit button:

        const editButton = document.createElement('button');
        editButton.innerText= "EDIT";
        newLi.appendChild(editButton);
        editButton.addEventListener('click', editing);
        
    };
    inputTask.value = "" ; 
    
 });

// delete button make up

function deleting(){
    let forDelete = this.parentElement
    taskList.removeChild(forDelete);
};

// edit button make up

function editing() {
    let forEdit = this.parentElement;
    let input = document.createElement('input');
    input.type = 'text';
    input.value = 

    forEdit.replaceWith(input);

    editButton.textContent = 'save';
}