const db = require("../projects/project-model")

function validateProjectId() {
	return async (req, res, next) => {
        try {
          const projects = await db.getProjectsById(req.params.id);
    
          if (projects) {
            req.projects = projects;
            next();
          } else {
            res.status(404).json({
              message: "Invalid project id",
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: "Error retrieving the project",
          });
        }
      };
    }

    function validateProjectResourceId() {
        return async (req, res, next) => {
            try {
              const projectsResources = await db.getProjectResources(req.params.id);
        
              if (projectsResources) {
                req.projectsResources = projectsResources;
                next();
              } else {
                res.status(404).json({
                  message: "Invalid project Resource id",
                });
              }
            } catch (error) {
              console.log(error);
              res.status(500).json({
                message: "Error retrieving the project Resource",
              });
            }
          };
        }

        function validateResourceProjectsById() {
            return async (req, res, next) => {
                try {
                  const resourcesProjects = await db.getResourcesFromProjects(req.params.id);
            
                  if (resourcesProjects) {
                    req.resourcesProjects = resourcesProjects;
                    next();
                  } else {
                    res.status(404).json({
                      message: "Invalid resource from projects id",
                    });
                  }
                } catch (error) {
                  console.log(error);
                  res.status(500).json({
                    message: "Error retrieving resource from projects",
                  });
                }
              };
            }

    function validateProject() {
        return (req, res, next) => {
          if (Object.keys(req.body).length === 0) {
            res.status(400).json({
              message: "missing project data",
            });
          } else if (!req.body.project_name) {
            res.status(400).json({
              message: "missing required project_name field",
            });
          } else {
            next();
          }
        };
      }

module.exports = {
	validateProjectId,
    validateProject,
    validateProjectResourceId,
    validateResourceProjectsById
}