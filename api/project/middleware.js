const checkProjectBody = (req, res, next) => {
  const { name } = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "name is required" });
  } else if (!name) {
    res.status(400).json({ message: "name is required" });
  } else {
    next();
  }
}

module.exports = {checkProjectBody};