const inputarea=document.querySelector(".inputarea")
const button=document.querySelector(".button")
const list=document.querySelector(".list")
const deleteinput=document.querySelector(".delete")

function inputhandler() {
    let task=inputarea.value;
    if(task.length==0) {
        return;
    }
    const taskelem=document.createElement("li")
    taskelem.textContent = task;
    list.appendChild(taskelem)
    inputarea.value=""
    
    deleteinput.addEventListener("click",function(){
        taskelem.remove();
    })

}

button.addEventListener("click",inputhandler)
