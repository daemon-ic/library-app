const express = require("express");
const router = express.Router();
const User = require("../models/Users");

// CREATE
router.post("/createUser", (req, res) => {
  console.log("User Created");
  console.log(req.body);
  const newUser = new User({
    name: req.body.name,
    lastName: req.body.lastName,
  });
  newUser
    .save()
    .then((result) => {
      console.log(result);
      return res.json({ result: result });
    })
    .catch((error) => {
      console.log(error);
      return res.json({ error: error });
    });
});

// READ
// gets all the users --->
router.get("/allUsers", async (req, res) => {
  const users = await User.find();

  try {
    console.log("Got all Users");
    return res.json(users);
  } catch (error) {
    return res.json({ message: "User could not be retrieved" });
  }
});

// gets one user specified by ID --->
router.get("/singleUser/:id", (req, res) => {
  const user = User.findById(req.params.id);
  user.then((user) => {
    console.log("Got User");
    return res.json(user);
  });
});

// UPDATE
router.put("/updateUser/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body).then((data) => {
    console.log("User Updated");
    return res.json(data);
  });
});

// DELETE
router.delete("/deleteUser/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      return res.status(200).json({ message: `User ${req.body.name} Deleted` });
    })
    .catch((error) => {
      return res.json({ message: `User could not be deleted ${error}` });
    });
});

module.exports = router;
