const tagService = require("../services/tagService");

const getAll = async (req, res) => {
  try {
    const tags = await tagService.getAll();
    res.status(200).json({
      success: true,
      message: "Etiketler başarıyla alındı.",
      tags,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const tag = await tagService.getById(id);
    res.status(200).json({
      success: true,
      message: "Etiket başarıyla alındı.",
      tag,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const create = async (req, res) => {
  const tag = req.body;
  try {
    const newTag = await tagService.create(tag);
    res.status(201).json({
      success: true,
      message: "Etiket başarıyla oluşturuldu.",
      tag: newTag,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const tag = req.body;
  try {
    const updatedTag = await tagService.update(id, tag);
    res.status(200).json({
      success: true,
      message: "Etiket başarıyla güncellendi.",
      tag: updatedTag,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await tagService.remove(id);
    res.status(200).json({
      success: true,
      message: "Etiket başarıyla silindi.",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
