document.getElementById("remove_all_tasks").addEventListener("click", (e) => {
  const checkedTasks = document.querySelectorAll("input[type='checkbox']");
  const indexes = Array.from(checkedTasks)
    .filter((ele) => !ele.checked)
    .map((ele, i) => {
      return { newTask: ele.nextElementSibling.value, id: i };
    });

  fetch(`/delete_multiple`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(indexes),
  }).then(() => {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => updateUI(data));
  });
});
