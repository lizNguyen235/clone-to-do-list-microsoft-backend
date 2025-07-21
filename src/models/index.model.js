const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import từng model
db.ListGroup = require("./list-group.model")(sequelize, DataTypes);
db.TaskList = require("./task-list.model")(sequelize, DataTypes);
db.Task = require("./task.model")(sequelize, DataTypes);
db.TaskStep = require("./task-step.model")(sequelize, DataTypes);
db.File = require("./file.model")(sequelize, DataTypes);

// Gọi associate
Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;
