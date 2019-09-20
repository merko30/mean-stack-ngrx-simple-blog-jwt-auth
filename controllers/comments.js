const Comment = require("../models/comment");
const Post = require("../models/post");

const create = async (req, res, next) => {
  try {
    const comment = await new Comment(req.body).save();
    const post = await Post.findById(req.params.postID);
    post.comments = [...post.comments, comment];
    await post.save();
    res.json({ comment });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.commentID,
      req.body,
      { new: true }
    );
    res.json({ comment });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.commentID);
    const post = await Post.findById(req.params.postID);
    post.comments = post.comments.filter(
      comment => comment._id !== req.params.commentID
    );
    await post.save();
    res.json({ comment });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  update,
  remove
};