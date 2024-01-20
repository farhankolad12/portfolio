const { Types } = require("mongoose");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const Blogs = require("../models/blogsModel");

exports.getBlog = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.query;

  const data = await Blogs.findById(id);

  return res.status(200).json(data);
});

exports.getBlogs = catchAsyncErrors(async (req, res, next) => {
  const data = await Blogs.find();

  return res.status(200).json(data);
});

exports.addBlog = catchAsyncErrors(async (req, res, next) => {
  const { img, shortInfo, header, tags, blog } = req.body;

  const newBlog = new Blogs({
    img,
    shortInfo,
    header,
    tags: JSON.parse(tags),
    createdAt: Date.now(),
    blog,
  });

  await newBlog.save();

  return res.status(200).json({ success: true });
});
