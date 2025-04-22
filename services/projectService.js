const projectRepo = require("../repositories/projectRepo.js");

const getAll = async () => {
  try {
    const projects = await projectRepo.getAll();
    if (!projects) {
      throw new Error("Hiç proje bulunamadı.");
    }
    return projects;
  } catch (error) {
    throw new Error("Proje listesi alınırken bir hata oluştu.");
  }
};

const getById = async (id) => {
  try {
    const project = await projectRepo.getById(id);
    if (!project) {
      throw new Error("Proje bulunamadı.");
    }
    return project;
  } catch (error) {
    throw new Error("Proje alınırken bir hata oluştu.");
  }
};

const create = async (project) => {
  try {
    const createdProject = await projectRepo.create(project);
    if (!createdProject) {
      throw new Error("Proje oluşturulamadı.");
    }
    return createdProject;
  } catch (error) {
    throw new Error("Proje oluşturulurken bir hata oluştu." + error);
  }
};

const update = async (id, project) => {
  try {
    const updatedProject = await projectRepo.update(id, project);
    if (!updatedProject) {
      throw new Error("Proje güncellenemedi.");
    }
    return updatedProject;
  } catch (error) {
    throw new Error("Proje güncellenirken bir hata oluştu.");
  }
};

const remove = async (id) => {
  try {
    const deletedProject = await projectRepo.remove(id);
    if (!deletedProject) {
      throw new Error("Proje silinemedi.");
    }
    return deletedProject;
  } catch (error) {
    throw new Error("Proje silinirken bir hata oluştu.");
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
