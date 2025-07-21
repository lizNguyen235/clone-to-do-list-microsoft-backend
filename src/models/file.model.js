module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
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
      type: {
        type: DataTypes.STRING(50),
      },
      size: {
        type: DataTypes.INTEGER,
      },
      file_url: {
        type: DataTypes.TEXT,
      },
      task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "files",
      timestamps: true, // tự động createdAt, updatedAt
      createdAt: "created_at", // đổi tên cột
      updatedAt: "updated_at",
      paranoid: true, // dùng deleted_at để "xóa mềm"
      deletedAt: "deleted_at",
      underscored: true, // tự động đổi camelCase -> snake_case
    }
  );

  File.associate = (models) => {
    File.belongsTo(models.Task, {
      foreignKey: "task_id",
    });
  };

  return File;
};
