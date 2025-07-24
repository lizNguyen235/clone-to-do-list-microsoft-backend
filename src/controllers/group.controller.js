const db = require("../models/index.model.js");

function deleteGroup(req, res) {
  const groupId = parseInt(req.params.group_id, 10);
  db.Group.destroy({ where: { id: groupId } })
    .then((deleted) => {
      if (!deleted) {
        return res.status(404).send("Group not found");
      }
      res.status(204).send();
    })
    .catch((error) => {
      console.error("Error deleting group:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}

function getAllGroups(req, res) {
  db.Group.findAll()
    .then((groups) => res.json(groups))
    .catch((error) => {
      console.error("Error fetching groups:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}
function getGroupById(req, res) {
  const groupId = parseInt(req.params.group_id, 10);
  db.Group.findByPk(groupId)
    .then((group) => {
      if (!group) {
        return res.status(404).send("Group not found");
      }
      res.json(group);
    })
    .catch((error) => {
      console.error("Error fetching group:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}
function createGroup(req, res) {
  const { name, description } = req.body;

  db.Group.create({ name, description })
    .then((group) => res.status(201).json(group))
    .catch((error) => {
      console.error("Error creating group:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}
function updateGroup(req, res) {
  const groupId = parseInt(req.params.group_id, 10);
  const { name, description } = req.body;

  db.Group.update({ name, description }, { where: { id: groupId } })
    .then(([rowsUpdated]) => {
      if (rowsUpdated === 0) {
        return res.status(404).send("Group not found");
      }
      res.status(200).send("Group updated successfully");
    })
    .catch((error) => {
      console.error("Error updating group:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}

module.exports = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
};
