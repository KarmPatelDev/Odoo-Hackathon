import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const userAuthMiddleware = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.send("Please Provide Token");
  } else {
    try {
      const user = await jwt.verify(token, process.env.JWT_SECRET);
      console.log(user);
      req.body.user = user.user;
      next();
    } catch (err) {
      res.send(err);
    }
  }
};

export { userAuthMiddleware };
