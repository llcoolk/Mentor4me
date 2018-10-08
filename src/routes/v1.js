const express = require("express");
const router = require("express").Router();
const userCtrl = require("../controllers/user");
const mentorCtrl = require("../controllers/mentor");
const studentCtrl = require("../controllers/student");
const profileCtrl = require("../controllers/profile");
const apptCtrl = require("../controllers/appointment");

// user CRUD routes
router.get("/users", userCtrl.getAll);
router.post("/signup", userCtrl.signup);
router.post("/auth", userCtrl.auth);
router.put("/users/:id", userCtrl.update);
router.get("/users/:id", userCtrl.getOne);
router.delete("/user/:id", userCtrl.remove);

router.get("/mentors", mentorCtrl.getAll);
router.get("/mentors/:id", mentorCtrl.getOne);
//router.put("/mentors/:id", mentorCtrl.update);

router.get("/students", studentCtrl.getAll);
router.get("/students/:id", studentCtrl.getOne);
// router.put("/student/:id", studentCtrl.update);

// profile CRUD routes
router.get("/profile/:id", profileCtrl.getOne);
router.get("/profiles", profileCtrl.getAll);
router.post("/profiles", profileCtrl.create);
router.put("/profile/:id", profileCtrl.update);
router.delete("/profile/:id", profileCtrl.remove);

// appointment CRUD routes
router.get("/appointments/:user_id", apptCtrl.getAll);
router.get("/appointments", apptCtrl.getAllAppt);
router.post("/appointments", apptCtrl.create);
router.put("/appointment/:id", apptCtrl.update);
router.get("/appointments/mentor/:id", apptCtrl.getAllMentor);
router.get("/appointments/student/:id", apptCtrl.getAllStudent);

// router.get("/appointment/mentor/:id", apptCtrl.getOneMentor);
// router.get("/appointment/student/:id", apptCtrl.getOneStudent);
router.delete("/appointment/:id", apptCtrl.remove);

module.exports = router;
