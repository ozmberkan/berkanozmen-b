const tagRepo = require("../repositories/tagRepo.js");

const getAll = async () => {
  try {
    const tags = await tagRepo.getAll();

    if (!tags) {
      throw new Error("Etiketler bulunamadı.");
    }

    return tags;
  } catch (error) {
    console.error(error);
    throw new Error("Bir hata oluştu.");
  }
};

const getById = async (id) => {
  try {
    const tag = await tagRepo.getById(id);

    if (!tag) {
      throw new Error("Etiket bulunamadı.");
    }

    return tag;
  } catch (error) {
    console.error(error);
    throw new Error("Bir hata oluştu.");
  }
};

const create = async (tag) => {
  try {
    const newTag = await tagRepo.create(tag);

    if (!newTag) {
      throw new Error("Etiket oluşturulamadı.");
    }

    return newTag;
  } catch (error) {
    console.error(error);
    throw new Error("Bir hata oluştu.");
  }
};

const update = async (id, tag) => {
  try {
    const updatedTag = await tagRepo.update(id, tag);

    if (!updatedTag) {
      throw new Error("Etiket güncellenemedi.");
    }

    return updatedTag;
  } catch (error) {
    console.error(error);
    throw new Error("Bir hata oluştu.");
  }
};

const remove = async (id) => {
  try {
    const deletedTag = await tagRepo.remove(id);

    if (!deletedTag) {
      throw new Error("Etiket silinemedi.");
    }

    return deletedTag;
  } catch (error) {
    console.error(error);
    throw new Error("Bir hata oluştu.");
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
