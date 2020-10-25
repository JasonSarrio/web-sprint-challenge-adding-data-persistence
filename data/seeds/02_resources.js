exports.seed = async function(knex) {
	await knex("resources").insert([   
    { resource_name: "full stack developer", resource_description: "we need a full stack developer to create full web page" },
    { resource_name: "front-end developer", resource_description: "we need a front-end developer to create a client-side web page" },
    { resource_name: "back-end developer", resource_description: "we need a back-end developer to create a database for a web page" },
    { resource_name: "CSS styled-components", resource_description: "This i needed to style a webpage" },
    { resource_name: "meeting room", resource_description: "we a meeting room to discuss about what are we going to do" },
    { resource_name: "software license", resource_description: "This is needed to create the web page" },
  ])
}
