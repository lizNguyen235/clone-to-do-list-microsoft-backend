const express = require("express");
const router = express.Router();
const tasks = require("../controllers/task.controller");

// GET /api/v1/tasks
router.get("/", tasks.getAllTasks);

// GET /api/v1/tasks/:task_id
router.get("/:task_id", tasks.getTaskById);

// POST /api/v1/tasks/
router.post("/", tasks.addTask);

// PATCH /api/v1/tasks/:task_id
router.patch("/:task_id", tasks.updateTask);

// DELETE /api/v1/tasks/multiple-delete (delete nhiều task từ body)
router.delete("/multiple-delete", tasks.deleteMultipleTasks);
// DELETE /api/v1/tasks/:task_id
router.delete("/:task_id", tasks.deleteTask);

module.exports = router;
