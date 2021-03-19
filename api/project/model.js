const db = require('../../data/dbConfig');

const getAll = async () => {
  const projects = await db('projects');

  return projects.map(project => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false  
    }
  })
};

const create = (project) => {

};

module.exports = {
  getAll,
  create
};