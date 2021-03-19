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
  const [id] = await db('projects').insert(project, ['id']);
  return getById(id);
};

const getById = (id) => {
  return db('projects').where({ id }).first();
};

module.exports = {
  getAll,
  create
};