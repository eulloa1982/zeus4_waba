var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');
const { validateToken, generateAccessToken, login } = require("../middlewares/validateToken");
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt


const passwordHash = '$2b$10$ET29p5cc4nAGsfVkPNrFQ.4ZhyUAQitnKGRkoXdqWmpQsUlJnsJXu'
const privateKey= 'mykey'
const username = 'myuser'

//wrapper around async middleware
const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

//protect all other routes
router.all("*", validateToken);

/* 
/wabaSend 
send whatsapp message
@from WhatsApp business number
@to recipient
@message text message
*/
router.get("/", asyncHandler(async function(req, res) {

    let sendMessage = await waba.getMessagesTemplates()
        .then(message => {
            res.status(200).send({
                data: message
            })
        })
}));


module.exports = router;
