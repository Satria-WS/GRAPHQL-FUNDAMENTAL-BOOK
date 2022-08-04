const db = require("./database/dataStudent.json");

const Query = {
    students: () => db.students.list(),
};

const Student = {
    college: (root) => {
        return db.colleges.get(root.collegeId);
    },
};

exports = { Query, Student };
