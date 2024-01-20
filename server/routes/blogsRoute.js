const express = require("express");
const cors = require("cors");
const {
  addBlog,
  getBlogs,
  getBlog,
} = require("../controllers/blogsController");

const router = express.Router();

router.use(
  cors({
    origin: [process.env.REACT_APP_URL],
    optionsSuccessStatus: 200,
    preflightContinue: true,
  })
);

router.route("/blog").post(addBlog);
router.route("/blog").get(getBlog);
router.route("/blogs").get(getBlogs);

module.exports = router;
