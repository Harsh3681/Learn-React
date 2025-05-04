const jwt = require('jsonwebtoken');
require('dotenv/config.js')
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ success: false, error: err });
  }
};
