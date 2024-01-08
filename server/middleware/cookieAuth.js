const jwt = require("jsonwebtoken");
const env = require("dotenv");

module.exports = async (req, res, next) => {
  try {
    const cookie = req.cookies.cookieAuth;
    if (!cookieToken) return res.status(401).json("Not Logged In.");
    decodedCookieToken = jwt.verify(cookieToken, "secret-key");

    req.userData = {
      userName: docededCookieToken.name,
      userId: decodedCookieToken.userId,
    };

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json("Unauthenticated...");
  }
};
