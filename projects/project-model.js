const db = require('../data/config');

// to get all projects
// function getProjects() {
//   return db('projects');
// }

// to get projects with resource
function getProjects() {
return db('projects')
    // .innerJoin("projects as p", "p.id", "pr.project_id")
    // .innerJoin("resources as r", "r.id", "pr.resource_id")
    // .orderBy("p.id")
    // .select("p.*", "r.resource_name")
}

// to get a specific project by id
function getProjectsById(id) {
    return db("projects as p")
    .select(["p.*"])

    .where("p.id", id)
    .first();
}

// to get a list of project resources
function getProjectResources(id) {
    return db("project_resource as pr")
     .innerJoin("projects as p", "p.id", "pr.project_id")
     .innerJoin("resources as r", "r.id", "pr.resource_id")
     .where("p.id", id)
     .select(["p.id", "p.project_name", "r.resource_name" ])
}

// to get a list of project resources
function getResourcesFromProjects(id) {
    return db("project_resource as pr")
     .innerJoin("projects as p", "p.id", "pr.project_id")
     .innerJoin("resources as r", "r.id", "pr.resource_id")
     .where("r.id", id)
     .select(["r.id", "r.resource_name", "p.project_name"  ])
}

// to add a project
function insertProjects(projects) {
    return db('projects').insert(projects).then((ids) => {
      return getProjectsById(ids[0]);
    });
  }

// to get all resources
function getResources() {
    return db('resources')
}

// to get a specific resource by id
function getResourcesById(id) {
    return db("resources")
    .where({ id })
    .first();
}

// to add a resource
function insertResources(resources) {
    return db('resources').insert(resources).then((ids) => {
      return getResourcesById(ids[0]);
    });
  }

// to add resources to projects
function insertResourcesToProjects(resources) {
    return db('resources as r')
    .innerJoin("projects as t", "t.id", "r.project_id")
    .insert(resources).then((ids) => {
      return getResourcesById(ids[0]);
    });
  }

// to add resourddes to projects



module.exports = {
  getProjects,
  getProjectResources,
  getProjectsById,
  getResources,
  getResourcesById,
  insertProjects,
  insertResources, 
  getResourcesFromProjects,
  insertResourcesToProjects
};
