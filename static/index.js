const add_task_btn = document.getElementById("add_task");
const remove_all_btn = document.getElementById("remove_all_tasks");
const remove_btn = document.getElementById("remove_task");
const text_task = document.getElementById("text_task");
const ulListTasks = document.getElementById("ulListTasks");

// let tasks = [];

// add_task_btn.addEventListener("click", () => {
//   tasks.push(text_task.value);
//   updateUI(tasks);
//   text_task.value = "";
// });

// remove_all_btn.addEventListener("click", () => {
//   const checkedTasks = document.querySelectorAll("input[type='checkbox']");

//   const newTasks = Array.from(checkedTasks)
//     .filter((ele) => !ele.checked)
//     .map((ele) => ele.nextElementSibling.textContent);

//   updateUI(newTasks);
// });

function updateUI(arr) {
  ulListTasks.innerHTML = arr
    .map(
      (task, i) => `
  <li>
      <div class="tadkItem">
        <form action="/removeTask" method="post">
          <input type="checkbox" name="checkTask" class="checkTask" />
          <input type="text" readonly name="actTask" value="${task.newTask}" >
          <button type="submit" class="btn btn_remove" id="remove_task">
            <i class="fa-regular fa-trash-can"></i>
          </button>
      </form>
    <div>
    </li>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("/getTasks")
    .then((res) => res.json())
    .then((data) => updateUI(data));
});
