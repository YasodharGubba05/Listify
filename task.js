const inputarea=document.querySelector(".inputarea")
const button=document.querySelector(".button")
const list=document.querySelector(".list")

function inputhandler() {
    let task=inputarea.value;
    if(task.length==0) {
        return;
    }
    const taskelem=document.createElement("li")
    taskelem.textContent = task;
    list.appendChild(taskelem)
    inputarea.value=""
}

button.addEventListener("click",inputhandler)
