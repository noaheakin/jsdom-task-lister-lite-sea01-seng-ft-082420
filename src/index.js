document.addEventListener('DOMContentLoaded', () => {
  const newForm = document.querySelector('#create-task-form');
  const newTaskDes = document.querySelector('#new-task-description');
  const list = document.querySelector('#tasks')
  newForm.addEventListener('submit', function(event) {
    event.preventDefault()
   const itemLi = document.createElement('li')
   itemLi.innerText = newTaskDes.value
   list.appendChild(itemLi) 
  })
});