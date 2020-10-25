const express = require("express")
const db = require("../projects/project-model")
const { validateProjectId, validateProject, validateProjectResourceId, validateResourceProjectsById } = require("../middleware/projects")
const { validateResourcesId, validateResource } = require("../middleware/resources")
const { validateTasksId } = require("../middleware/tasks")

const router = express.Router()

// to get all projects
router.get("/projects", async (req, res, next) => {
	try {
		const project = await db.getProjects()
		res.json(project)
	} catch(err) {
		next(err)
	}
})

// to get a specific project
router.get("/projects/:id", validateProjectId(), (req, res) => {
    res.status(200).json(req.projects);
  });

// to add a project
  router.post("/projects", validateProject(), async (req, res) => {
    try {
      const projects = await db.insertProjects(req.body);
  
      res.status(201).json(projects);
    } catch (error) {
      next(error);
    } 
  });

  // to get projects with different resources
  router.get("/projects/:id/resources", validateProjectResourceId(), (req, res) => {
    res.status(200).json(req.projectsResources);
})

  // to get resource from different projects
  router.get("/resources/:id/projects", validateResourceProjectsById(), (req, res) => {
    res.status(200).json(req.resourcesProjects);
})

// to get all resources
router.get("/resources", async (req, res, next) => {
	try {
		const resource = await db.getResources()
		res.json(resource)
	} catch(err) {
		next(err)
	}
})

// to get a specific resource
router.get("/resources/:id", validateResourcesId(), (req, res) => {
    res.status(200).json(req.resources);
  });

// to add a resource
router.post("/resources", validateResource(), async (req, res) => {
    try {
      const resources = await db.insertResources(req.body);
  
      res.status(201).json(resources);
    } catch (error) {
      next(error);
    } 
  });

  // to add a resource to projects
router.post("/projects/:id/resources", validateResource(), async (req, res, next) => {
    try {
      const resources = await db.insertResourcesToProjects(req.body);
  
      res.status(201).json(resources);
    } catch (error) {
      next(error);
    } 
  });


module.exports = router