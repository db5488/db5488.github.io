const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = createTaskItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}

function createTaskItem(taskText) {
  const listItem = document.createElement("li");

  const taskLabel = document.createElement("label");
  taskLabel.innerText = taskText;

  const editButton = document.createElement("button");
  editButton.innerText = "修改";
  editButton.addEventListener("click", editTask);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "刪除";
  deleteButton.addEventListener("click", deleteTask);

  const completedButton = document.createElement("button");
  completedButton.innerText = "已完成";
  completedButton.addEventListener("click", toggleCompleted);

  listItem.appendChild(taskLabel);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  listItem.appendChild(completedButton);

  return listItem;
}

function editTask() {
  const listItem = this.parentNode;
  const taskLabel = listItem.querySelector("label");
  const newTask = prompt("請輸入新的任務：", taskLabel.innerText);

  if (newTask !== null && newTask.trim() !== "") {
    taskLabel.innerText = newTask.trim();
  }
}

function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}

function toggleCompleted() {
  const listItem = this.parentNode;
  listItem.classList.toggle("completed");
}
