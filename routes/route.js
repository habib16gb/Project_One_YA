import express from "express";

import {
  addTask,
  removeTask,
  showTasks,
  removeAll,
  getTasks,
} from "../controllers/tasks.js";
import { tasksPage, loginPage, homePage } from "../controllers/pages.js";

const router = express.Router();

router.get("/", homePage);

router.get("/api/tasks", showTasks);
router.get("/getTasks", getTasks);
router.post("/addTask", addTask);
router.post("/removeTask", removeTask);
router.post("/delete_multiple", removeAll);

router.get("/login", loginPage);

router.get("/tasks", tasksPage);

export default router;
