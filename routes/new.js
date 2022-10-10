const router = require("express").Router();
const New = require("../models/New");
const User = require("../models/User");
const Comment = require("../models/Comment");

var ObjectId = require("mongoose").Types.ObjectId;

router.get("/", async (req, res, next) => {
  if (req.query.userId) {
    if (ObjectId.isValid(req.query.userId)) {
      const news = await New.find({ userId: req.query.userid });
      return res.json(news);
    } else {
      res.status(404).send();
    }
  }
  res.json(await New.find());
});

router.get("/:id", async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    return res.json(await New.findById(req.params.id));
  }
  return res.status(404).send();
});

router.post("/", async (req, res, next) => {
  if (req.body) {
    const new_ = new New(req.body);
    savedNew = await new_.save();
    return res.json(savedNew);
  } else {
    return res.status(400).send();
  }
});

router.put("/:id", async (req, res, next) => {
  if (ObjectId.isValid(req.params.id) && req.body) {
    const updateResponse = await New.updateOne({ id: req.params.id }, req.body);
    console.log(updateResponse);
    return res.json(updateResponse);
  }
  res.status(400).send();
});

router.delete("/:id", async (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send();
  }
  const deleteResponse = await New.deleteOne({ id: req.params.id });
  if (deleteResponse.acknowledged)
    return res.json({ message: "deleted " + req.params.id });
  else return res.status(404).send();
});

router.post("/comment", async (req, res, next) => {
  if (
    !req.body ||
    !ObjectId.isValid(req.body.userId) ||
    !ObjectId.isValid(req.body.hackernewId)
  ) {
    return res.status(400).send();
  }
  const commentedNew = await New.findById(req.body.hackernewId);
  if (commentedNew) {
    const comment = new Comment(req.body);
    savedComm = await comment.save();
    // New.update({ _id: req.body.hackernewId }, { $push: { comments: comment._id } });
    commentedNew.comments.push(comment._id);
    await commentedNew.save();
    return res.json(savedComm);
  }
  return res.status(400).send();
});

router.post('/vote', async (req, res, next) => {
    
})

module.exports = router;
