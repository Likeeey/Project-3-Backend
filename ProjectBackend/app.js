// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const exerciseRoutes = require("./routes/exercise.routes");
app.use("/api", exerciseRoutes);

const coachRoutes = require("./routes/coaches.routes");
app.use("/api", coachRoutes);

const memberRoutes = require("./routes/member_results.routes");
app.use("/api", memberRoutes);

const trackingRoutes = require("./routes/tracking.routes");
app.use("/api", trackingRoutes);

const trainingRoute = require("./routes/trainings.routes");
app.use("/api", trainingRoute);

const userRoutes = require("./routes/user.routes");
app.use("/api", userRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
