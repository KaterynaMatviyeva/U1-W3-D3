//input che riepmie la list

// document.addEventListener(window.onload, (event) => {
//   for (let i = 0; i < list.length; i++) {
//     const list = document.getElementsByTagName("ul");

//     const inputElement = document.getElementsByTagName("input");
//     const btnElement = document.getElementById("btn1");
//     const outputElement = document.getElementsByTagName("ul");

//     btnElement.addEventListener("click", () => {
//       const inputValue = inputElement.value;

//       if (inputValue) {
//         const newListItem = document.createElement("li");
//         newListItem.innerText = inputValue;
//         outputElement.appendChild(newListItem);
//       } else {
//         alert("per favore inserisci un valore");
//       }

//       inputElement.value = "";
//     });
//     console.log("salvato");
//   }
// });

// form.onsubmit = function (event) {
//   event.preventDefault();
//   const textInput = document.getElementsByTagName("input");

//   const elementList = document.getElementsByTagName("li");

//   elementList.innerHTML += `
//             <li onclick="handleCardClick(event)">${textInput.value}

//                 </li>

//   `;

//   form.reset();
//   console.log("FORM INVIATO!", elementList);
// };

// const handleKeyupEvent = (ev) => {
//   if (ev.key === "Enter") {
//     const ul = document.querySelector("ul");
//     const li = document.createElement("li");
//     li.innerText = ev.target.value;
//   }
// };
// console.log("ho fatto");

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

form.addEventListener("click", function (event) {
  event.preventDefault();

  const task = input.value.trim();

  if (task !== "") {
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = task;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Rimuovi";
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
