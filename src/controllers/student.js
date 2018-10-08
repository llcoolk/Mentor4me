const User = require("../models").User;
const Profile = require("../models").Profile;

const getOne = (req, res) => {
  User.findOne({
    where: { role: "student", userId: req.params.id },
    attributes: {},
    include: { model: Profile }
  }).then(student => {
    console.log("student", student);
    const output = {
      firstName: student.first,
      lastName: student.last,
      email: student.email,
      image: student.imgUrl,
      role: student.role,
      summary: student.Profile.summary,
      bio: student.Profile.bio
    };

    res.json(output);
  });
};

const getAll = (req, res) => {
  User.findAll({
    where: { role: "student" },
    attributes: {},
    include: { model: Profile }
  })
    // .then(students => res.json(students));
    .then(student => {
      const studentProfile = student.map(student => {
        return Object.assign(
          {},
          {
            userId: student.userId,
            firstName: student.first,
            lastName: student.last,
            email: student.email,
            image: student.imgUrl,
            bio: student.Profile.bio,
            summary: student.Profile.summary
          }
        );
      });
      console.log("studentProfile", studentProfile);
      res.json({ studentProfile });
    });
};

module.exports = {
  getAll,
  getOne
};
