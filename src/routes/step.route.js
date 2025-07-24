const express = require("express");
const router = express.Router();
const stepController = require("../controllers/step-task.controller");

// POST /api/v1/steps/
router.post("/", stepController.addStep);

// DELETE /api/v1/steps/:step_id
router.delete("/:step_id", stepController.deleteStep);

// PATCH /api/v1/steps/:step_id
router.patch("/:step_id", stepController.updateStep);

// GET /api/v1/steps/:task_id
router.get("/:task_id", stepController.getStepsByTaskId);

module.exports = router;
