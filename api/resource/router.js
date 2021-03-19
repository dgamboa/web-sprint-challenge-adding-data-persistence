const router = require('express').Router();
// import middleware
const Resource = require('./model');

router.get('/', (req, res, next) => {
  res.json({msg: "get to be implemented"})
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