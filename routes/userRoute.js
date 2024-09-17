const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const checkExist = await User.findOne({ email });

    if (checkExist) {
      return res.status(400).send({ message: "User already exists." });
    }

    // Check if the email ends with @admin.com
    let admin = false;
    if (email.endsWith("@admin.com")) {
      admin = true;
    }

    // Create a new user
    const newUser = new User({
      username: username,
      email: email,
      password: password,
      isAdmin: admin,
    });

    console.log(newUser);

    // Save the new user
    const savedUser = await newUser.save();

    // Respond with success message
    res.status(201).send({ message: "Registered successfully", user: savedUser });
  } catch (error) {
    // Handle server error
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.find({ email, password })
    .then((result) => {
      const user = {
        username: result[0].username,
        email: result[0].email,
        isAdmin: result[0].isAdmin,
        _id: result[0]._id,
      };
      res.send(user);
    })
    .catch((error) => {
      console.log(error);
      return res.status(404).json({ message: error });
    });
});

router.get("/alluser", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).json({ message: "Error" });
    });
});

router.post("/delete", (req, res) => {
  const { _id } = req.body;
  User.findByIdAndDelete(_id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).json({ message: "Error" });
    });
});

module.exports = router;
