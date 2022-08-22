const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateEvent(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.story = !isEmpty(data.story) ? data.story : "";
    
    if (!validator.isEmail(data.email)) {
        errors.email = "Format Email required";
      }
    if (validator.isEmpty(data.name)) {
        errors.name = "Required name";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Required email";
    }
    if (validator.isEmpty(data.story)) {
        errors.story = "Required story";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
};