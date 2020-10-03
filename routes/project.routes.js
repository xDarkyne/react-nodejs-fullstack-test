const Project = require("../models/project.model.js");

module.exports = app => {
    const project = require("../controllers/project.controller.js");
  
    // Create a new Project
    app.post("/api/projects", project.create);
  
    // Retrieve all Projects
    app.get("/api/projects", project.getAll);
  };