const router = require('express').Router();
// import middleware
const Resource = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch(err) { next(err) }
});

router.post('/', (req, res, next) => {
  res.json({msg: "post to be implemented"})
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
});

module.exports = router;