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

/* initial path */
router.post("/login", asyncHandler(async function(req, res) {
    const { password } = req.body;
    try{
        /** One way, can't decrypt but can compare */
        var salt = bcrypt.genSaltSync(10);

        /** Encrypt password */
        bcrypt.hash('E@Js#07Do=U$', salt, (err, res) => {
            hash = res
        });


        token = null
        if(password) {
          let match  = await bcrypt.compare(password,passwordHash)
          if (match)
            token = await jwt.sign({ password }, privateKey,{ expiresIn: '1h'})
        }

        if(token) {
            return res.json({token:token})
        }
        else {
            console.log("Unan access")
            return res.status(401).send(
                {error: "Unauthorized access"}
            )
        }
       } 
       catch(err) {
        console.log(err)
        return res.sendStatus(500)
       }
}));

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

//protect all other routes
router.all("*", validateToken);



/* 
/wabaSend 
send whatsapp message
@from WhatsApp business number
@to recipient
@message text message
*/
router.post("/", asyncHandler(async function(req, res) {
    const { to, message } = req.body
    let sendMessage = await waba.sendMessage(to, message)
        .then(message => {
            console.log('From route', message)
            res.status(200).send({
                data: message
            })
        })
}));




module.exports = router;
