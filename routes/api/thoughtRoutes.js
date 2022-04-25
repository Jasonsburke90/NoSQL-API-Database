const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateCourse,
  deleteCourse,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);
// .put(updateCourse)
// .delete(deleteCourse);

module.exports = router;
