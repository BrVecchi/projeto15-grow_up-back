export const tokenMiddleware = (req, res, next) => {
  const { Authorization } = req.headers;

  const token = Authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }
  req.token = token;
  next();
};
