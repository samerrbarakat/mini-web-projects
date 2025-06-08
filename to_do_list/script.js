const inputBox = document.getElementById("input-Box") ; 
const listContainer= document.getElementById("list-container") ;
const reset = document.getElementById("reset") ; 

function addTask(){
    if (inputBox.value ===''){
        alert("You're task can't be 'Do Nothing!'") ; 
    }
    else {
        let li = document.createElement("li") ;
        li.innerHTML = inputBox.value ; 
        listContainer.appendChild(li) ; 
        let span = document.createElement("span") ; // Span is the tag name
        span.innerHTML ="\u00d7" ; 
        li.appendChild(span); 
    }
    inputBox.value="" ; 
    saveData() ; 
}
function resetTask (){ 
    console.log(
        " reset was pressed"
    )
}

listContainer.addEventListener("click",function(e) {
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked") ; 
        saveData() ; 
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove() ; 
        saveData() ; 

    }
},false) ; 

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
function resetTask(){
    listContainer.innerHTML = "" ; 
    saveData() ; 
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML) ; 
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); 
}
showTask() ; 

