
const express = require("express")
const db = require("../tasks/tasks-model")
const { validateTask, validateTasksId , validateTaskProjectId } =require("../middleware/tasks")


const router = express.Router()


// to get all tasks
router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await db.getTasks()
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

// to get a specific task
router.get("/tasks/:id", validateTasksId(), (req, res) => {
    res.status(200).json(req.tasks);
  });

// to get projects with id to get all tasks
    router.get("/tasks/:id/projects", validateTaskProjectId(), (req, res) => {
        res.status(200).json(req.taskProjects);
    })

// to add a tasks
router.post("/tasks", validateTask(), async (req, res, next) => {
    try {
      const tasks = await db.insertTasks(req.body);
  
      res.status(201).json(tasks);
    } catch (error) {
      next(error);
    } 
  });





module.exports = router