const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

form.addEventListener("click", function (event) {
  event.preventDefault();

  const task = input.value.trim();

  if (task !== "") {
    const newTaskItem = document.createElement("li");
    newTaskItem.innerText = task;
    const removeButton = document.createElement("button");
    removeButton.innerText = "Rimuovi"; //mettere icona
    removeButton.addEventListener("click", function () {
      todoList.removeChild(newTaskItem);
    });
    newTaskItem.addEventListener("click", function () {
      newTaskItem.classList.toggle("completed");
    });
    newTaskItem.appendChild(removeButton);

    todoList.appendChild(newTaskItem);

    input.value = "";
  }
});
