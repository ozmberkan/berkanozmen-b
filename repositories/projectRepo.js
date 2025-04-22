const prisma = require("../prisma/prisma.js");

const getAll = async () => {
  return await prisma.project.findMany({
    include: {
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

const getById = async (id) => {
  return await prisma.project.findUnique({
    where: { id },
    include: {
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

const create = async (project) => {
  return await prisma.project.create({
    data: {
      ...project,
      tags: {
        connect: project.tags?.map((id) => ({ id })),
      },
    },
    include: {
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

const update = async (id, project) => {
  return await prisma.project.update({
    where: { id },
    data: {
      title: project.title,
      tags: {
        set: [],
        connect: project.tags?.map((id) => ({ id })),
      },
    },
    include: {
      tags: true,
    },
  });
};

const remove = async (id) => {
  return await prisma.project.delete({
    where: { id },
    include: {
      tags: true,
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
