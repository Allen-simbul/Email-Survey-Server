const creditCheck = async (req, res, next) => {
  console.log('credit check middlware is running');
  try {
    if (req.user.credits < 1) {
      throw new Error();
    }
    next();
  } catch (e) {
    return res.status(403).send({ error: 'Not Enough credits!' });
  }
};

module.exports = creditCheck;
