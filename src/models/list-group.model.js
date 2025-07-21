module.exports = (sequelize, DataTypes) => {
  const ListGroup = sequelize.define(
    "ListGroup",
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
    },
    {
      tableName: "list_groups",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true,
      deletedAt: "deleted_at",
      underscored: true,
    }
  );

  ListGroup.associate = (models) => {
    ListGroup.hasMany(models.TaskList, {
      foreignKey: "group_id",
    });
  };

  return ListGroup;
};
