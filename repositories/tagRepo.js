const prisma = require("../prisma/prisma.js");

const getAll = async () => {
  return await prisma.tag.findMany();
};

const getById = async (id) => {
  return await prisma.tag.findUnique({
    where: {
      id: id,
    },
  });
};

const create = async (tag) => {
  return await prisma.tag.create({
    data: tag,
  });
};

const update = async (id, tag) => {
  return await prisma.tag.update({
    where: {
      id: id,
    },
    data: tag,
  });
};

const remove = async (id) => {
  return await prisma.tag.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
