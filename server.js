// module imports
const express = require("express");
const path = require("path");
const cors = require("cors");

const v1 = require("./src/routes/v1");
const app = express();

require("dotenv").config();

// PRODUCTION ONLY
if (process.env.NODE_ENV) {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// Connect to Datase and Load models
const models = require("./src/models");
models.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to SQL database:", process.env.DB_NAME);
  })
  .catch(err => {
    console.error("Unable to connect to SQL database:", process.env.DB_NAME);
  });
if (process.env.app === "dev") {
  // models.sequelize.sync(); // For creating new tables
  // models.sequelize.sync({ force: true }); // For re-creating all tables
}

// app middleware
app.use(express.json());
app.use(cors());
app.use("/v1", v1);

// PRODUCTION ONLY
if (process.env.NODE_ENV) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port:${port}`));

module.exports = app;
