const router = require("express").Router();
const User = require("../models/User");
var ObjectId = require("mongoose").Types.ObjectId;

router.get("/", async (req, res, next) => {
  res.json(await User.find());
});

router.get("/:id", async (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    return res.json(await User.findById(req.params.id));
  }
  return res.json({});
});

router.post("/", async (req, res, next) => {
  if (req.body) {
    const newUser = new User(req.body);
    console.log(await newUser.save());
    return res.json(newUser);
  } else {
    return res.status(400).send();
  }
});

router.post("/signin", async (req, res, next) => {
  if (!req.body) return res.status(400).send();
  
  const user = User.findOne({ username: req.body.username });
  if (user) {
    if (password == user.password) return res.json(user);
  }
  return res.status(404).json({ message: "Invalid username or password." });
});

router.put("/:id", async (req, res, next) => {
  if (ObjectId.isValid(req.params.id) && req.body) {
    const updateResponse = await User.updateOne(
      { id: req.params.id },
      req.body
    );
    console.log(updateResponse);
    return res.json(updateResponse);
  }
  res.json({});
});

router.delete("/:id", async (req, res, next) => {
  if (ObjectId.isValid(req.params.id))
    console.log(await User.deleteOne({ id: req.params.id }));
  return res.json({ message: "deleted " + req.params.id });
});

module.exports = router;
