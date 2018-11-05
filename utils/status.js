const SUCCESS_CODE = 200;
const ERROR_CODE = 406;
const NOT_AUTH_CODE = 401;


module.exports.returnSuccess = (res, data) => {
    return res.status(SUCCESS_CODE).json(data);
};

module.exports.returnError = (res, error = null) => {
    return res.status(ERROR_CODE).json({ error });
};


