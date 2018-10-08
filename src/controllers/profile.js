const Profile = require("../models").Profile;
const User = require("../models").User;

const getOne = (req, res) => {
  Profile.findOne({
    where: {
      profileId: req.params.id
    }
  }).then(profile => {
    console.log(profile);
    res.json(profile);
  });
};

const getAll = (req, res) => {
  Profile.findAll().then(profile => {
    console.log(profile);
    res.json(profile);
  });
};

const create = (req, res) => {
  const newProfile = {
    summary: req.body.summary,
    bio: req.body.bio,
    userId: req.body.userId
  };

  Profile.create(newProfile)
    .then(profile => res.status(201).json(profile))
    .catch(err =>
      res.status(422).json({
        Error: err
      })
    );
};

// const studentProfiles = (req, res) => {
//   User.findAll({ where: { "role": "student" } }).then(studentP =>
//     res.json(studentP)
//   );
// };

const update = (req, res) => {
  const { summary, bio, userId } = req.body;

  const updateProfile = {};

  if (summary) {
    updateSummary.summary = summary;
  }
  if (bio) {
    updateUser.bio = bio;
  }
  if (userId) {
    updateUser.userId = userId;
  }

  Profile.update(updateProfile, {
    where: {
      profileId: req.params.id
    }
  })
    .then(res => res.json({ updated: true }))
    .catch(err =>
      res.json({
        updated: false,
        message: err
      })
    );
};

const remove = (req, res) => {
  console.log("profileData:", req.profileData);
  Profile.findOne({ where: { profileId: req.params.id } }).then(profile => {
    if (profile !== null) {
      Profile.destroy({
        where: {
          profileId: req.params.id
        }
      })
        .then(prof =>
          res.json({ success: true, message: "User Profile has been deleted." })
        )
        .catch(err =>
          res.json({
            Error: err
          })
        );
    } else {
      res.json({
        success: false,
        message: "There's no profile with that Id."
      });
    }
  });
};

module.exports = {
  getOne,
  getAll,
  create,
  update,
  remove
};
