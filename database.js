const { prisma } = require("./common");

const createNewUser = async (email, firstName, lastName, password) => {
  const response = await prisma.User.create({
    data: {
      email,
      firstName,
      lastName,
      password,
    },
  });
  return response;
};

const getUser = async (id) => {
  const response = prisma.user.findFirstOrThrow({
    where: {
      id,
    },
    select: {
        firstName: true,
        lastLame: true,
        id: true,
        email: true,
      },
  });
  return response;
};

const deleteUser = async (email) => {
    const response = await prisma.user.delete({
      where: {
        email,
      }, 
    });
    return response;
  };

const getUsers = async () => {
    const response = await prisma.user.findMany({});
    return response;
  };

const getClient = async (id) => {
    const response = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });
    return response;
  };

  const updateUser = async ( id, email, firstName, lastName, password) => {
    const response = await prisma.user.update({
        where:{
            id
        },
      data: {
        email,
        firstName,
        lastName,
        password,
      },
    });
    return response;
  };

  

module.exports = { createNewUser, getUser, getUsers, getClient, deleteUser, updateUser };