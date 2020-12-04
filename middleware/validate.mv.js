const yup = require('yup');

module.exports.newForumMsgValidate = async (req, res, next) => {
  const { body } = req;

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    textMessage: yup.string().min(2).max(256).required(),
    createdAt: yup.date().max(new Date()).default(new Date()).required(),
  });

  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.editedForumMsgValidate = async (req, res, next) => {
  const { body } = req;

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    textMessage: yup.string().min(2).max(256).required(),
  });

  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};
