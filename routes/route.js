import express from "express";
import path from "path";
import {
  addTask,
  removeTask,
  showTasks,
  removeAll,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("static", "index.html"));
});

router.get("/api/tasks", showTasks);

router.get("/getTasks", showTasks);
router.post("/addTask", addTask);

router.post("/removeTask", removeTask);

router.post("/delete_multiple", removeAll);
export default router;
