const express = require("express");
const helmet = require("helmet")
const projectsRouter = require("./projects/projectsRouter");
const tasksRouter = require("./tasks/tasksRouter")
const logger = require("./middleware/logger")
const server = express();

server.use(helmet())
server.use(express.json());
server.use(logger("long"))

server.use("/api", projectsRouter);
server.use("/api", tasksRouter)

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
});

server.get("/", (req, res) => {
  res.send(`<h2>Welcome To My Module 3 Spring Challenge Project</h2>`);
});

module.exports = server;