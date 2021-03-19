const checkTaskBody = (req, res, next) => {
  const { description, project_id } = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "description and project_id are required" });
  } else if (!description || !project_id) {
    res.status(400).json({ message: "description and project_id are required" });
  } else {
    next();
  }
}

module.exports = {checkTaskBody};