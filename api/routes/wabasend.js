var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');


const secretKey = ' Token 123 /*- 1234';
//wrapper around async middleware
const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

//JWT Middleware
router.use(expressJwt({
    secret: secretKey,
    algorithms: ['HS256'],
    exp: 188900,
    credentialsRequired: true,
    getToken: function fromHeaderOrQuerystring(req) {
        if (!req.headers.authorization) {
            return "Do not pass";
        } else if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;    
    }
}));

/* initial path */
router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

/* /wabaSend 
send whatsapp message
@from WhatsApp business number
@to recipient
@message text message
*/
router.post("/", asyncHandler(async function(req, res) {
    
    const { from, to, message } = req.body
    let sendMessage = await waba.sendMessage(from, to, message)
        .then(message => {
            res.status(200).send({
                data: message
            })
        });
    
}));

module.exports = router;
