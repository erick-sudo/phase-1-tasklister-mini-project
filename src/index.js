document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let todolist = []
  document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault()
    addTodo(document.getElementById("new-task-description").value, document.getElementById("tasks"), document.querySelector("select").value)
  })
});

function addTodo(task, tasks, priority) {
  if(Boolean(task)){
    document.getElementById("new-task-description").style.boxShadow = "none"
    let removeButton = document.createElement("button")
    removeButton.textContent = "X"
    removeButton.setAttribute("class", "remove-task")
    
    removeButton.addEventListener('click', removeCallback)
    let li = document.createElement("li")
    switch(priority) {
      case "High":
        li.style.color = "red"
        break
      case "Medium":
        li.style.color = "yellow"
        break
      case "Low":
        li.style.color = "green"
        break
    }
    li.appendChild(removeButton)
    li.appendChild(document.createTextNode(task))
    tasks.appendChild(li)
  } else {
    document.getElementById("new-task-description").style.boxShadow = "inset 0.04em 0.04em 0.4em red"
    
  }
}

function removeCallback(event){
  event.target.closest("li").remove()
}