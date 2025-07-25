const db = require("../models/index.model.js");
const Group = db.ListGroup;
function deleteGroup(req, res) {
  const groupId = parseInt(req.params.group_id, 10);
  Group.destroy({ where: { id: groupId } })
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
  Group.findAll()
    .then((groups) => res.json(groups))
    .catch((error) => {
      console.error("Error fetching groups:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}
function getGroupById(req, res) {
  const groupId = parseInt(req.params.group_id, 10);
  Group.findByPk(groupId)
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
  const { name } = req.body;

  Group.create({ name })
    .then((group) => res.status(201).json(group))
    .catch((error) => {
      console.error("Error creating group:", error);
      res.status(500).send("Internal Server Error");
    });
  return;
}
function updateGroup(req, res) {
  const groupId = parseInt(req.params.group_id, 10);
  const { name } = req.body;

  Group.findByPk(groupId)
    .then((group) => {
      if (!group) {
        return res.status(404).send("Group not found");
      }
      return group.update({ name });
    })
    .then(() => {
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
