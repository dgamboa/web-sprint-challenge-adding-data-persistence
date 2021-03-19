const db = require('../../data/dbConfig');

const getAll = () => {
  return db('resources');
};

const create = (resource) => {

};

module.exports = {
  getAll,
  create
};