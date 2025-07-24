const db = require("../models/index.model.js");
const TaskStep = db.TaskStep;

async function addStep(req, res) {
  try {
    const { task_id, name, is_done } = req.body;
    const newStep = await TaskStep.create({ task_id, name, is_done });
    res.status(201).json(newStep);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo step" });
  }
}

async function deleteStep(req, res) {
  try {
    const deleted = await TaskStep.destroy({
      where: { id: req.params.step_id },
    });
    if (!deleted) return res.status(404).json({ error: "Step không tồn tại" });
    res.json({ message: "Đã xóa step thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa step" });
  }
}

async function updateStep(req, res) {
  try {
    const [updated] = await TaskStep.update(req.body, {
      where: { id: req.params.step_id },
    });

    if (updated === 0)
      return res.status(404).json({ error: "Step không tồn tại" });

    const updatedStep = await TaskStep.findByPk(req.params.step_id);
    res.json(updatedStep);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật step" });
  }
}

async function getStepsByTaskId(req, res) {
  try {
    const steps = await TaskStep.findAll({
      where: { task_id: req.params.task_id },
    });
    res.json(steps);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy steps của task" });
  }
}

module.exports = {
  addStep,
  deleteStep,
  updateStep,
  getStepsByTaskId,
};
