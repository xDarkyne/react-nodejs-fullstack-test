const Project = require("../models/project.model.js");

// Create and Save a new Project
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Project
    const projects = new Project({
      name: req.body.name,
      descript: req.body.descript,
      github: req.body.github
    });
  
    // Save Project in the database
    Project.create(projects, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the projects."
        });
      else res.send(data);
    });
  };

// Retrieve all Projects from the database.
exports.getAll = (req, res) => {
    Project.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving projects."
          });
        else res.send(data);
      });
};