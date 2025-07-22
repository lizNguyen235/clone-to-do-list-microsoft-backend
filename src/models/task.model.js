module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      due_date: {
        type: DataTypes.DATE,
      },
      is_important: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      category: {
        type: DataTypes.TEXT,
      },
      remind: {
        type: DataTypes.DATE,
      },
      is_my_day: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      is_done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      list_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "tasks",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
      underscored: true,
    }
  );

  Task.associate = (models) => {
    Task.belongsTo(models.TaskList, { foreignKey: "list_id" });
    Task.hasMany(models.TaskStep, { foreignKey: "task_id" });
    Task.hasMany(models.File, { foreignKey: "task_id" });
  };

  return Task;
};
