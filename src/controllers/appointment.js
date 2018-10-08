const Op = require("sequelize").Op;
const Appt = require("../models").Appointment;
const User = require("../models").User;

const create = (req, res) => {
  Appt.create(req.body).then(() =>
    res
      .status(201)
      .json({ success: true, message: "Your appointment has been created" })
  );
};

const getAll = (req, res) => {
  Appt.findAll({
    where: {
      [Op.or]: [
        { studentId: req.params.user_id },
        { mentorId: req.params.user_id }
      ]
    },
    order: [["apptId", "DESC"]],
    include: [
      {
        model: User
      }
    ]
  }).then(appts => res.json(appts));
};

// get one specific appointment for Mentor

const getOneMentor = (req, res) => {
  Appt.findOne({
    where: {
      [Op.or]: [{ mentorId: req.params.user_id }, { apptId: req.params.apptId }]
    }
  }).then(appt => {
    console.log(appt);
    res.json(appt);
  });
};

// get one for one specific appt for Student

const getOneStudent = (req, res) => {
  Appt.findOne({
    where: {
      [Op.or]: [
        { studentId: req.params.user_id },
        { apptId: req.params.apptId }
      ]
    }
  }).then(appt => {
    console.log(appt);
    res.json(appt);
  });
};

// get all appointments for one mentor -- to be used for mentor-dashboard

const getAllMentor = (req, res) => {
  Appt.findAll({
    where: { mentorId: req.params.id }
  }).then(mentorAppts => {
    console.log(mentorAppts);
    res.json(mentorAppts);
  });
};

// get all appointments for one student -- to be used for student-dashboard

const getAllStudent = (req, res) => {
  Appt.findAll({
    where: { studentId: req.params.id }
  }).then(studentAppts => {
    console.log(studentAppts);
    res.json(studentAppts);
  });
};

const getAllAppt = (req, res) => {
  Appt.findAll({}).then(allAppts => {
    console.log(allAppts);
    res.json(allAppts);
  });
};

const update = (req, res) => {
  const { date, time, comment, status } = req.body;

  const updateAppointment = {};

  if (date) {
    updateAppointment.date = date;
  }
  if (time) {
    updateAppointment.time = time;
  }
  if (status) {
    updateAppointment.status = status;
  }
  if (comment) {
    updateAppointment.comment = comment;
  }

  Appt.update(updateAppointment, {
    where: {
      apptId: req.params.id
    }
  })
    .then(() => res.json({ updated: true }))
    .catch(err =>
      res.json({
        updated: false,
        message: err
      })
    );
};

const remove = (req, res) => {
  // console.log("apptData:", req.apptData);
  Appt.findOne({ where: { apptId: req.params.id } }).then(appt => {
    if (appt !== null) {
      Appt.destroy({
        where: {
          apptId: req.params.id
        }
      })
        .then(res =>
          res.json({ success: true, message: "Appointment has been deleted" })
        )
        .catch(err =>
          res.json({
            Error: err
          })
        );
    }
    //  else {
    //   res.json({
    //     success: false,
    //     message: "Appointment not found"
    //   });
    // }
  });
};

module.exports = {
  create,
  getOneMentor,
  getOneStudent,
  getAll,
  getAllAppt,
  getAllMentor,
  getAllStudent,
  update,
  remove
};
