const db = require("./db");

const Query = {
    test: () => "Test Succes , GraphQL server ",
    students: () => db.students.list(),
};

module.exports = { Query };
