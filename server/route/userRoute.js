const express = require("express");
const passport = require("passport");
const setAuthHeader = require("../middleware/accessTokenAutoRefresh");
require("../config/passport-stretegy-jwt");

const router = express.Router();

const {
  userRegistration,
  userLogin,
  userProfile,
  verifyEmail,
  getNewAccessToken,
  changePassword,
  sendPasswordResetEmail,
  passwordReset,
  userLogout,
} = require("../controller/userController");
// const validateToken = require("../middleware/validateTokenHandler");

router.post("/register", userRegistration);
router.post("/verify-email", verifyEmail);

router.post("/login", userLogin);
router.post("/refresh-token", getNewAccessToken);

// router.get("/current", validateToken, currentUser);

router.post("/reset-password", sendPasswordResetEmail);
router.post("/reset-password/:id/:token", passwordReset);

router.get(
  "/me",
  setAuthHeader,
  passport.authenticate("jwt", { session: false }),
  userProfile
);

router.post(
  "/change-password",
  setAuthHeader,
  passport.authenticate("jwt", { session: false }),
  changePassword
);

router.post(
  "/logout",
  setAuthHeader,
  passport.authenticate("jwt", { session: false }),
  userLogout
);

module.exports = router;
