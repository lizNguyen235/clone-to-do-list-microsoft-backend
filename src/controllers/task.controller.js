const db = require("../models/index.model.js");
function getAllTasks(req, res) {
  db.Task.findAll()
    .then((tasks) => res.json(tasks))
    .catch((error) => {
      console.error("Error fetching tasks:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}

async function addTask(req, res) {
  const {
    name,
    due_date,
    is_important,
    category,
    remind,
    is_my_day,
    content,
    list_id,
  } = req.body;

  try {
    await db.Task.create({
      name,
      due_date,
      is_important,
      category,
      remind,
      is_my_day,
      content,
      list_id,
    });
    return res.status(201).send("Task created successfully");
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).send("Internal Server Error");
  }
}
function getTaskById(req, res) {
  const taskId = parseInt(req.params.task_id, 10);
  console.log("Fetching task with ID:", taskId);
  db.Task.findByPk(taskId)
    .then((task) => {
      if (!task) {
        return res.status(404).send("Task not found");
      }
      res.json(task);
    })
    .catch((error) => {
      console.error("Error fetching task:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}

function updateTask(req, res) {
  const taskId = parseInt(req.params.task_id, 10);
  const {
    name,
    due_date,
    is_important,
    category,
    remind,
    is_my_day,
    content,
    list_id,
  } = req.body;

  db.Task.update(
    {
      name,
      due_date,
      is_important,
      category,
      remind,
      is_my_day,
      content,
      list_id,
    },
    { where: { id: taskId } }
  )
    .then(() => res.send(`Update task with ID: ${taskId}`))
    .catch((error) => {
      console.error("Error updating task:", error);
      res.status(500).send("Internal Server Error");
    });
}

async function deleteTask(req, res) {
  const taskId = parseInt(req.params.task_id, 10);
  try {
    await db.Task.destroy({ where: { id: taskId } });
    return res.send(`Delete task with ID: ${taskId}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).send("Internal Server Error");
  }
}

function deleteMultipleTasks(req, res) {
  const taskIds = req.body.task_ids; // expect an array of task IDs
  console.log("Deleting tasks with IDs:", taskIds);
  if (!Array.isArray(taskIds) || taskIds.length === 0) {
    return res.status(400).send("Invalid task IDs");
  }

  db.Task.destroy({ where: { id: taskIds } })
    .then(() => res.send("Tasks deleted successfully"))
    .catch((error) => {
      console.error("Error deleting tasks:", error);
      res.status(500).send("Internal Server Error");
    });
}

function deleteAllTasks(req, res) {
  db.Task.destroy({ where: {}, truncate: true })
    .then(() => res.send("All tasks deleted successfully"))
    .catch((error) => {
      console.error("Error deleting all tasks:", error);
      res.status(500).send("Internal Server Error");
    });
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
  deleteMultipleTasks,
};
