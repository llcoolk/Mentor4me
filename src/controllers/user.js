const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models").User;
const Profile = require("../models").Profile;

const signup = (req, res) => {
  User.findOne({ where: { email: req.body.email } }).then(user => {
    if (!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            Error: err
          });
        } else {
          // console.log("hashedPass:", hash);
          const newUser = {
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            password: hash,
            role: req.body.role,
            imgUrl: req.body.imgUrl
          };

          User.create(newUser)
            .then(result => {
              console.log(result);
              Profile.create({ bio: "", summary: "", userId: result.userId });
              res.status(201).json({
                message: "User created"
              });
            })
            .catch(err => {
              res.status(200).json({
                message: err
              });
            });
        }
      });
    } else {
      res.json({ message: "Email already in use" });
    }
  });
};

const auth = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then(user => {
    if (user !== null) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            {
              userId: user.userId,
              first: user.first,
              last: user.last,
              email: user.email,
              role: user.role,
              avatar: user.imgUrl
            },
            process.env.JWT_ENCRYPTION,
            { expiresIn: process.env.JWT_EXPIRATION }
          );
          res.json({ success: true, token });
        } else {
          res.json({ success: false, message: "Incorrect password" });
        }
      });
    } else {
      res.json({ success: false, message: "No user found with that email" });
    }
  });
};

const getAll = (req, res) => {
  User.findAll().then(users => res.json(users));
};

const remove = (req, res) => {
  console.log("userData:", req.userData);
  User.findOne({ where: { userId: req.params.id } }).then(user => {
    if (user !== null) {
      User.destroy({
        where: {
          userId: req.params.id
        }
      })
        .then(user =>
          res.json({ success: true, message: "User has been deleted" })
        )
        .catch(err =>
          res.json({
            Error: err
          })
        );
    } else {
      res.json({
        success: false,
        message: "No user found with that email"
      });
    }
  });
};

const update = (req, res) => {
  const { first, last, password, imgUrl, summary, bio } = req.body;

  console.log("BODY", req.body);

  const updateUser = {};
  const updateProfile = {};

  if (first) {
    updateUser.first = first;
  }
  if (last) {
    updateUser.last = last;
  }
  if (password) {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      updateUser.password = hash;
    });
  }
  if (imgUrl) {
    updateUser.imgUrl = imgUrl;
  }
  if (summary) {
    updateProfile.summary = summary;
  }
  if (bio) {
    updateProfile.bio = bio;
  }

  User.findOne({ where: { userId: req.params.id } }).then(foundUser => {
    if (foundUser) {
      User.update(updateUser, {
        where: {
          userId: req.params.id
        }
      })
        .then(() => {
          Profile.update(updateProfile, {
            where: { userId: req.params.id }
          })
            .then(() => res.json({ updated: true }))
            .catch(() =>
              res.json({ updated: false, message: "something went wrong" })
            );
        })
        .catch(err =>
          res.json({
            updated: false,
            message: err
          })
        );
    } else {
      res.json({ updated: false, message: "No users found with that ID" });
    }
  });
};

const getOne = (req, res) => {
  User.findOne({
    where: { userId: req.params.id },
    include: { model: Profile }
  }).then(foundUser => {
    if (foundUser) {
      const output = {
        userId: foundUser.userId,
        firstName: foundUser.first,
        lastName: foundUser.last,
        email: foundUser.email,
        image: foundUser.imgUrl,
        role: foundUser.role,
        summary: foundUser.Profile.summary,
        bio: foundUser.Profile.bio
      };
      res.json(output);
    }
  });
};

module.exports = {
  signup,
  auth,
  getOne,
  getAll,
  update,
  remove
};
