const auth = async (req, res, next) => {
  console.log('auth middleware is running');
  try {
    if (!req.user) {
      throw new Error();
    }
    next();
  } catch (e) {
    return res.status(401).send({ error: 'You must log in!' });
  }
};

module.exports = auth;
