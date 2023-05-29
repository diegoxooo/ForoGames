const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if (!req.headers['user_token']) {
        return res.json({
            error: "Debes incluir el header"
        });
    }

    const token = req.headers['user_token'];
    let payload = null;
    try {
        payload = jwt.decode(token, "Token_Auth");
    } catch (err) {
        return res.json({
            error: "Token invalido"
        });
    }

    if (moment().unix() > payload.expiredAt){
        res.json({
            error: "Token expirado"
        });
    }

    res.userId = payload.userId;

    next();
}

module.exports = {
    checkToken: checkToken
};