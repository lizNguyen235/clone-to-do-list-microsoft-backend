const db = require("../models/index.model.js");
const File = db.File;

async function addFile(req, res) {
  try {
    const { name, type, size, file_url, task_id } = req.body;

    const newFile = await File.create({
      name,
      type,
      size,
      file_url,
      task_id,
    });

    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi thêm file" });
  }
}

async function deleteFile(req, res) {
  try {
    const deleted = await File.destroy({
      where: { id: req.params.file_id },
    });

    if (!deleted) return res.status(404).json({ error: "Không tìm thấy file" });

    res.json({ message: "Xóa file thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa file" });
  }
}

async function getFilesByTaskId(req, res) {
  try {
    const files = await File.findAll({
      where: { task_id: req.params.task_id },
    });

    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách file" });
  }
}

module.exports = {
  addFile,
  deleteFile,
  getFilesByTaskId,
};
