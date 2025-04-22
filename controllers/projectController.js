const projectService = require("../services/projectService");

const getAll = async (req, res) => {
  try {
    const projects = await projectService.getAll();
    res.status(200).json({
      success: true,
      message: "Proje listesi alındı.",
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const project = await projectService.getById(id);
    res.status(200).json({
      success: true,
      message: "Proje alındı.",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  const project = req.body;
  try {
    const createdProject = await projectService.create(project);
    res.status(201).json({
      success: true,
      message: "Proje oluşturuldu.",
      project: createdProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const project = req.body;
  try {
    const updatedProject = await projectService.update(id, project);
    res.status(200).json({
      success: true,
      message: "Proje güncellendi.",
      project: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const deletedProject = await projectService.remove(id);
    res.status(200).json({
      success: true,
      message: "Proje silindi.",
      project: deletedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
