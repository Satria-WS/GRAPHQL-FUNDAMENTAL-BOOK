import { users } from "./database";

const resolvers = {
    Query: {
        users: (parent, args, context, info) => {
            return users;
        },
    },

    Mutation: {
        createUser: (parent, { id, name, email, age }, context, info) => {
            const newUser = { id, name, email, age };
            users.push(newUser);
            return newUser;
        },
        updateUser: (parent, { id, name, email, age }, contex, info) => {
            let newUser = users.find((user) => user.id === id);
            newUser.name = name;
            newUser.email = email;
            newUser.age = age;
            return newUser;
        },
        deleteUser: (parent, { id }, context, info) => {
            const userIndex = user.findIndex((user) => user.id === id);
            if (userIndex === -1) throw new Error("User not found");

            const deletedUsers = users.splice(userIndex, 1);
            return deletedUsers[0];
        },
    },
};

export default resolvers;
