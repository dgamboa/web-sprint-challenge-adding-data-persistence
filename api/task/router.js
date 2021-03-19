const router = require('express').Router();
const {checkTaskBody} = require('./middleware');
const Task = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch(err) { next(err) }
});

router.post('/', checkTaskBody, (req, res, next) => {
  res.json({msg: "post to be implemented"})
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
});

module.exports = router;