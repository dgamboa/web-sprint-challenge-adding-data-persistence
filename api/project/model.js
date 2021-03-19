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

const create = async (project) => {
  const [id] = await db('projects').insert(project, ['project_id']);
  const newProject = await getById(id);
  return {
    ...newProject,
    project_completed: newProject.project_completed ? true : false
  }
};

const getById = (project_id) => {
  return db('projects').where({ project_id }).first();
};

module.exports = {
  getAll,
  create
};