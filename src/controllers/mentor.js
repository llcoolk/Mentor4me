const Op = require("sequelize").Op;
const User = require("../models").User;
const Profile = require("../models").Profile;

const getOne = (req, res) => {
  User.findOne({
    where: { role: "mentor", userId: req.params.id },
    attributes: {},
    include: { model: Profile }
  }).then(mentor => {
    console.log("mentor", mentor);
    const output = {
      mentorId: mentor.userId,
      firstName: mentor.first,
      lastName: mentor.last,
      email: mentor.email,
      image: mentor.imgUrl,
      role: mentor.role,
      summary: mentor.Profile.summary,
      bio: mentor.Profile.bio
    };

    res.json(output);
  });
};

const getAll = (req, res) => {
  console.log("query", req.query.s);
  const query = req.query.s;
  const where = {
    role: "mentor",
    [Op.or]: [
      { first: { [Op.like]: `%${query ? query : ""}%` } },
      { last: { [Op.like]: `%${query ? query : ""}%` } }
    ]
  };

  User.findAll({
    where,
    attributes: {},
    include: { model: Profile }
  })
    // .then(mentors => res.json(mentors));
    .then(mentors => {
      //console.log("mentor", mentors);
      const mentorProfile = mentors.map(mentor => {
        return Object.assign(
          {},
          {
            userId: mentor.userId,
            firstName: mentor.first,
            lastName: mentor.last,
            email: mentor.email,
            image: mentor.imgUrl,
            summary: mentor.Profile.summary,
            bio: mentor.Profile.bio
          }
        );
      });
      res.json(mentorProfile);
    });
};

// const getAll = (req, res) => {
//   User.findAll({ where: { role: "mentor" } }).then(mentor =>
//     res.json(mentors)
//   );
// };

module.exports = {
  getAll,
  getOne
};
