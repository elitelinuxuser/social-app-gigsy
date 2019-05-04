const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  "/",
  [
    auth
    // [
    //   check("status", "Status is required")
    //     .not()
    //     .isEmpty()
    // ]
  ],
  async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, phone, location, bio, gender } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.name = user.name;
    if (username) profileFields.username = username;
    if (phone) profileFields.phone = phone;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (gender) profileFields.gender = gender;
    profileFields.status = "pending";

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//@route  GET api/profile/pending
//@desc   Get pending profiles
//@access Private
router.get("/pending", admin, async (req, res) => {
  try {
    const profiles = await Profile.find({ status: "pending" });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/profile/approve/:profile_id
//@desc   Approve a profile
//@access Private
router.post("/approve/:profile_id", admin, async (req, res) => {
  const _id = req.params.profile_id;
  const profileFields = {};
  profileFields.status = "approved";

  try {
    let profile = await Profile.findOne({ _id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { _id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/profile/reject/:profile_id
//@desc   Approve a profile
//@access Private
router.post("/reject/:profile_id", admin, async (req, res) => {
  const _id = req.params.profile_id;
  const profileFields = {};
  profileFields.status = "rejected";

  try {
    let profile = await Profile.findOne({ _id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { _id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);

    if (!profile) return res.status(400).json({ msg: "Profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove user posts
    await Post.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
