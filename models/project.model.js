const sql = require('./db.js');

// Constructor
const Project = function(project) {
    this.name = project.name;
    this.descript = project.descript;
    this.github = project.github;
}

Project.create = (newProject, result) => {
    sql.query("INSERT INTO projects SET ?", newProject, (err, res) => {
    console.log({...newProject});
    if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
        }

        console.log("created project: ", { id: res.insertId, ...newProject });
        result(null, { id: res.insertId, ...newProject });
    });
  };

Project.getAll = result => {
    sql.query("SELECT * FROM projects", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("projects: ", res);
      result(null, res);
    });
};

module.exports = Project;