const db = require("../projects/project-model")

function validateResourcesId() {
	return async (req, res, next) => {
        try {
          const resources = await db.getResourcesById(req.params.id);
    
          if (resources) {
            req.resources = resources;
            next();
          } else {
            res.status(404).json({
              message: "Invalid resource id",
            });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: "Error retrieving the resource",
          });
        }
      };
    }

    function validateResource() {
        return (req, res, next) => {
          if (Object.keys(req.body).length === 0) {
            res.status(400).json({
              message: "missing resource data",
            });
          } else if (!req.body.resource_name) {
            res.status(400).json({
              message: "missing required resource_name field",
            });
          } else {
            next();
          }
        };
      }

module.exports = {
	validateResourcesId,
	validateResource,
}