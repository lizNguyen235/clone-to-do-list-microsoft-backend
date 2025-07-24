const express = require("express");
const router = express.Router();
const fileController = require("../controllers/file.controller");
const upload = require("../middlewares/multer.config");

// POST /api/v1/files/
router.post("/", upload.single("file"), fileController.uploadFile);

// GET /api/v1/files/:task_id
router.get("/:task_id", fileController.getFilesByTaskId);

// DELETE /api/v1/files/:file_id
router.delete("/:file_id", fileController.deleteFile);

module.exports = router;
