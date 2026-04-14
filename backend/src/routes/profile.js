const express = require("express");
const { userAuth } = require("../middlewares/auth.js");
const profileRouter = express.Router();
const { validateEditProfileData } = require("../utils/validation.js");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

//edit profile
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid edit request");
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName} your profile updated successfully`,
      data: loggedInUser
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const firstError = Object.values(err.errors)[0];
      return res.status(400).send(firstError.message);
    }
    res.status(400).send("Error: " + err.message);
  }
});

module.exports = profileRouter;
