const input = document.querySelector(".TaskFelid input")
const addBtn = document.querySelector(".TaskFelid .addBtn")
const TaskContainer = document.querySelector(".TaskContainer")


function addTask (inputText){
const li = document.createElement("li")
li.innerHTML = `     
   <p>${inputText}</p>
   <div class="taskBtn">
      <button class="edit">Edit</button>
      <button class="status">Status Change </button>
      <button class="delete">Delete</button>
   </div>`
TaskContainer.prepend(li)
input.value = ""
}

input.addEventListener("keypress", function (e){
   const inputText = e.target.value
   if (inputText && e.key === "Enter"){
      addTask(inputText)
   }
})

addBtn.addEventListener("click", function (e){
   const inputText = input.value
   if (inputText){
      addTask(inputText)
   }
})


