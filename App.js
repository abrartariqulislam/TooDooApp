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
TaskContainer.addEventListener("click" , function(e) {
   const targetElement = e.target
   if (targetElement.className === "delete"){
      targetElement.parentElement.parentElement.remove()
   }
   if (targetElement.className === "status"){
      targetElement.parentElement.previousElementSibling.classList.toggle("changeStatus")
   }
   if (targetElement.className === "edit"){
      const newElement = targetElement.parentElement.parentElement.firstElementChild
      const newInput =  document.createElement("input");
      newInput.addEventListener("keypress" , function (e){
         const newElementValue = e.target.value
         if (newElementValue && e.key === "Enter") {
            newElement.innerText = newElementValue
         }
      })
      newInput.value = newElement.textContent;
      newElement.innerHTML = "";
      newElement.appendChild(newInput);

   }
})

