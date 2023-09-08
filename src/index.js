document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const taskDescription = document.getElementById("new-task-description").value;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    taskList.appendChild(taskItem);

    document.getElementById("new-task-description").value = "";
  });
});


