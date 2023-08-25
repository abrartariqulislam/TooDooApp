const input = document.querySelector(".TaskFelid input")
const addBtn = document.querySelector(".TaskFelid .addBtn")
const TaskContainer = document.querySelector(".TaskContainer")

// Display
function addTask (inputText){
const li = document.createElement("li")
li.innerHTML = `     
   <p>${inputText}</p>
   <div class="taskBtn">
      <button class="edit">Edit</button>
      <button class="status">Change Status</button>
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
// mouse event effect
addBtn.addEventListener("mouseup", function (e){
   this.style.backgroundColor = "#32c49d"
})

addBtn.addEventListener("mousedown", function (e){
   this.style.backgroundColor = "#32c49d60"
})

// edit,delete, change status
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

// mouse event effect
TaskContainer.addEventListener("mousedown" , function(e){
   const targetElement = e.target
   if (targetElement.className === "status"){
      targetElement.style.backgroundColor = "#6b228b80"
   }
   if(targetElement.className === "edit"){
      targetElement.style.backgroundColor = "#00446080"
   }
   if(targetElement.className === "delete"){
      targetElement.style.backgroundColor = "#be042e50"
   }
})
TaskContainer.addEventListener("mouseup" , function(e){
   const targetElement = e.target
   if (targetElement.className === "status"){
      targetElement.style.backgroundColor = "#6b228b"
   }
   if(targetElement.className === "edit"){
      targetElement.style.backgroundColor = "#004460"
   }
   if(targetElement.className === "delete"){
      targetElement.style.backgroundColor = "#be042e"
   }
})