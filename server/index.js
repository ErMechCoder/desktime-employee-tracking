
const express = require("express");
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

require("dotenv").config();
const cors = require("cors");
const {connection} = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const projectRouter = require("./routes/project.routes");
const engineerprofileRouter = require("./routes/engineerprofile.routes.js");
const screenshotRoute = require("./routes/screenshot.routes")

// database connection


connection();

// console.log(content)


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(cors());


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", projectRouter);
app.use("/api/user",engineerprofileRouter);
app.use("/api/user",screenshotRoute)
// app.use("/api",userscreenRouter)





const port = process.env.PORT || 8000;
app.listen(port, console.log(`Listening on port ${port}...`));