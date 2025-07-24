const db = require("../models/index.model.js");
const List = db.List;

async function getAllLists(req, res) {
  try {
    const lists = await List.findAll();
    res.json(lists);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách lists" });
  }
}

async function addList(req, res) {
  try {
    const { name, description } = req.body;
    const newList = await List.create({ name, description });
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi tạo list" });
  }
}

async function getListById(req, res) {
  try {
    const list = await List.findByPk(req.params.list_id);
    if (!list) return res.status(404).json({ error: "List không tồn tại" });
    res.json(list);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy list" });
  }
}

async function deleteList(req, res) {
  try {
    const deleted = await List.destroy({ where: { id: req.params.list_id } });
    if (!deleted) return res.status(404).json({ error: "List không tồn tại" });
    res.json({ message: "Đã xóa list thành công" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa list" });
  }
}

async function updateList(req, res) {
  try {
    const [updated] = await List.update(req.body, {
      where: { id: req.params.list_id },
    });

    if (updated === 0)
      return res.status(404).json({ error: "List không tồn tại" });

    const updatedList = await List.findByPk(req.params.list_id);
    res.json(updatedList);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi cập nhật list" });
  }
}

module.exports = {
  getAllLists,
  addList,
  getListById,
  deleteList,
  updateList,
};
