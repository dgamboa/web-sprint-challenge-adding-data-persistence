const db = require('../../data/dbConfig');

const getAll = async () => {
  const tasks = await db('tasks as t')
    .column(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
    )
    .join('projects as p', 't.project_id', 'p.project_id')

  return tasks.map(task => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false
    }
  })
};

const create = (task) => {

};

module.exports = {
  getAll,
  create
};