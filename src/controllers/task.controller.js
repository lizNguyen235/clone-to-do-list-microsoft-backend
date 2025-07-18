exports.getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

exports.createTask = (req, res) => {
  res.send("Create task");
};

exports.getTaskById = (req, res) => {
  res.send(`Get task by ID: ${req.params.id}`);
};

exports.addTask = (req, res) => {
  res.send(`Get task by ID: ${req.params.id}`);
};

exports.updateTask = (req, res) => {
  res.send(`Update task ID: ${req.params.id}`);
};

exports.deleteTask = (req, res) => {
  res.send(`Delete task ID: ${req.params.id}`);
};

exports.completeTask = (req, res) => {
  res.send(`Mark task ${req.params.id} as complete`);
};

exports.incompleteTask = (req, res) => {
  res.send(`Mark task ${req.params.id} as incomplete`);
};

exports.deleteMultipleTasks = (req, res) => {
  res.send("Delete multiple tasks");
};
