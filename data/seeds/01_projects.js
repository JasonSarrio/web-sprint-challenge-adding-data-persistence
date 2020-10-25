exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ project_name: "build a web page", project_description: "This is a web page for clients", completed: true },
    { project_name: "organize a database server", project_description: "update a server for clients", completed: true },
    { project_name: "create a app using react", project_description: "we need to create an app using react", completed: false },
    { project_name: "styling a webpage using CSS", project_description: "This is a web page that we need to create styling using CSS", completed: true },
  ])
}