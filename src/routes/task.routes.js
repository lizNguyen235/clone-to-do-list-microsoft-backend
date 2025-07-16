const express = require("express");
const router = express.Router();
const tasks = require("../controllers/task.controller");
// Define routes for task operations

router.get("/", tasks.getAllTasks);
