import { readFile, writeFile } from "fs/promises";

const getTasks = async (req, res) => {
  let tasks = [];

  try {
    tasks = JSON.parse(await readFile("users.json"));
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile("users.json", []);
      tasks = [];
    } else {
      console.error(error);
      process.exit(1);
    }
  }

  return tasks;
};

const showTasks = async (req, res) => {
  const tasks = await getTasks();
  res.status(200).json(tasks);
};

const addTask = async (req, res) => {
  const tasks = await getTasks();
  const newTask = { ...req.body, id: tasks.length + 1 };
  writeFile("users.json", JSON.stringify(tasks.concat(newTask)));
  res.redirect("/");
};

const removeTask = async (req, res) => {
  const tasks = await getTasks();
  const { actTask } = req.body;
  const currentTask = tasks.find((task) => task.newTask === actTask);
  writeFile(
    "users.json",
    JSON.stringify(tasks.filter((task) => task.id !== currentTask.id))
  );
  res.status(200).redirect("/");
};

const removeAll = async (req, res) => {
  writeFile("users.json", JSON.stringify(req.body));
  res.status(200).redirect("/");
};

export { addTask, getTasks, removeTask, showTasks, removeAll };
