const express = require("express");
const router = express.Router();
const listController = require("../controllers/task-list.controller");

router.get("/", listController.getAllLists);
router.post("/", listController.addList);
router.get("/:list_id", listController.getListById);
router.delete("/:list_id", listController.deleteList);
router.patch("/:list_id", listController.updateList);

module.exports = router;
