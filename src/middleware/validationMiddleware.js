const { UserValidator } = require('../app/validation/userValidator');
const {validateSignup} = require('../app/validation/validator');

const validateMiddleware = {
    signup: (req, res, next) => {
        const { error } = validateSignup(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }
        next();
    }, 
    updateUser: (req, res, next) => {
        const { error } = UserValidator(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            });
        }
        next();
    }
}

module.exports = validateMiddleware;