const router = require('express').Router();
const {checkProjectBody} = require('./middleware');
const Project = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch(err) { next(err) }
});

router.post('/', checkProjectBody, (req, res, next) => {
  res.json({msg: "post to be implemented"})
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
});

module.exports = router;