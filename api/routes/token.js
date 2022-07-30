var express = require("express");
var router = express.Router();
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');


const secretKey = ' Token 123 /*- 1234';

router.get("/getToken", function(req, res) {
    const token = jwt.sign(
        {name: 'firsti'}
        , secretKey
        , {expiresIn: 60 * 2, algorithm: 'HS256' }
        );
        res.json({"_token": token});
})


module.exports = router;
