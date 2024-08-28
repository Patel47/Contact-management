const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;

  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing");
    }
    jwt.verify(token, process.env.ACCESS_KEY, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("User not authorized");
      }
      req.user = decode.user;

      next();
    });
  }
});

module.exports = validateToken;
