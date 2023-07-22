const add_task_btn = document.getElementById("add_task");
const remove_all_btn = document.getElementById("remove_all_tasks");
const remove_btn = document.getElementById("remove_task");
const text_task = document.getElementById("text_task");
const ulListTasks = document.getElementById("ulListTasks");

let tasks = [];

add_task_btn.addEventListener("click", () => {
  tasks.push(text_task.value);
  updateUI(tasks);
  text_task.value = "";
});

remove_all_btn.addEventListener("click", () => {
  const checkedTasks = document.querySelectorAll("input[type='checkbox']");

  const newTasks = Array.from(checkedTasks)
    .filter((ele) => !ele.checked)
    .map((ele) => ele.nextElementSibling.textContent);

  updateUI(newTasks);
});

function updateUI(arr) {
  ulListTasks.innerHTML = arr
    .map(
      (task, i) => `
  <li>
      <div class="tadkItem">
        <input type="checkbox" name="checkTask" class="checkTask" />
        <label>${task}</label>
        <button class="btn btn_remove" id="remove_task" onclick="removeItem(${i})">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  `
    )
    .join("");
}

function removeItem(id) {
  tasks.splice(id, 1);
  updateUI(tasks);
}
