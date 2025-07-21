module.exports = (sequelize, DataTypes) => {
  const TaskList = sequelize.define(
    "TaskList",
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
      theme: {
        type: DataTypes.STRING(50),
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "task_lists",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      paranoid: true,
      underscored: true,
    }
  );

  TaskList.associate = (models) => {
    TaskList.belongsTo(models.ListGroup, {
      foreignKey: "group_id",
    });
    TaskList.hasMany(models.Task, {
      foreignKey: "list_id",
    });
  };

  return TaskList;
};
