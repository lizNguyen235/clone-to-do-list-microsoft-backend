module.exports = (sequelize, DataTypes) => {
  const TaskStep = sequelize.define(
    "TaskStep",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      is_done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "task_steps",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
      underscored: true,
    }
  );

  TaskStep.associate = (models) => {
    TaskStep.belongsTo(models.Task, {
      foreignKey: "task_id",
    });
  };

  return TaskStep;
};
