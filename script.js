const inputBox = document.querySelector("#input-box");  
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(inputBox.value === ''){  
        alert("You must write something!"); //alert will show if it is blank
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // add list in list-container

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // create "X" symbol
        li.appendChild(span);

        saveData();  //task list in the browser don’t disappear after refresh. after adding saveData(); 
    }
    inputBox.value = '';  
}

// Enter Button Add Text
inputBox.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        addTask();
        saveData();
    }
})

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
         saveData();
    }
},false);

function saveData(){  //saves it in browser localStorage under key "data" 
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
