const db = require("../tasks/tasks-model")

function validateTasksId() {
	return async (req, res, next) => {
        try {
          const tasks = await db.getTasksById(req.params.id);
    
          if (tasks) {
            req.tasks = tasks;
            next();
          } else {
            res.status(404).json({
              message: "Invalid task id",
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: "Error retrieving the tasks",
          });
        }
      };
    }

    function validateTaskProjectId() {
        return async (req, res, next) => {
            try {
              const taskProjects = await db.getTaskProjectsId(req.params.id);
        
              if (taskProjects) {
                req.taskProjects = taskProjects;
                next();
              } else {
                res.status(404).json({
                  message: "Invalid task project id",
                });
              }
            } catch (error) {
              console.log(error);
              res.status(500).json({
                message: "Error retrieving the tasks projects",
              });
            }
          };
        }

    function validateTask() {
        return (req, res, next) => {
          if (Object.keys(req.body).length === 0) {
            res.status(400).json({
              message: "missing task data",
            });
          } else if (!req.body.task_description) {
            res.status(400).json({
              message: "missing required task_description field",
            });
          } else {
            next();
          }
        };
      }

    

module.exports = {
    validateTask,
    validateTasksId,
    validateTaskProjectId
}