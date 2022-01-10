document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(event) {
  if (event.code === 'Enter') {
    addTask();
  }
});

function addTask()
{
  let taskInput = document.getElementById('task-input');  
  const task = taskInput.value;

  if (task)
  {
    createTaskElement(task);
    taskInput.value = '';
  }
}

function createTaskElement(task)
{
  let taskList = document.getElementById('task-list');
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" /><label>${task}</label>`;

  taskList.appendChild(li);
}