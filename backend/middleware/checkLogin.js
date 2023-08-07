const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {

  let { authorization } = req.headers;
  if (!authorization) {
    authorization = req.query.token;
  }

  try {
    let token = authorization.split(" ")[1];
    if(!token){
      token = req.query.token
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, username } = decoded;
    req.userId = userId;
    req.username = username;
    console.log("User authorized");
    next();
  } catch (err) {
    res.status(401).json({ error: "Authentication failure!" });
    next("Authentication failure!");
  }
};

module.exports = checkLogin;
