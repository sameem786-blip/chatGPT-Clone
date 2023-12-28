const jwt = require("jsonwebtoken");
const env = require("dotenv");

module.exports = (req, res, next) => {
  try {
    console.log("Authenticating");

    let cookieToken, decodedCookieToken;
    cookieToken = req.cookies.cookieAuth; // Initialize cookieToken without "let"
    if (!cookieToken) return res.status(401).json("Not Logged In.");

    decodedCookieToken = jwt.verify(cookieToken, "akmakndalknadfa");

    req.userData = {
      name: decodedCookieToken.email,
      userId: decodedCookieToken.userId,
    };

    console.log("userData: ", req.userData);
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
