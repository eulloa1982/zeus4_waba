var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');
const { validateToken, generateAccessToken, login } = require("../middlewares/validateToken");
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt


const passwordHash = '$2b$10$L9nYrE48INGkPkdPPE3ABOXx.CXTCTKJadW3Cu35iirZHZAHHBzCi'
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
    const { name, password } = req.body;
    try{
        token = null
        if(name && password) {
          let match  = await bcrypt.compare(password,passwordHash)
          if(name===username && match)
            token = await jwt.sign({ username:username }, privateKey,{ expiresIn: '1h'})
        }
        if(token)
          return res.json({token:token, username:username})
        return res.sendStatus(401)
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
    console.log('Proccess',process.env.password);
    let sendMessage = await waba.sendMessage(to, message)
        .then(message => {
            res.status(200).send({
                data: message
            })
        })
        .catch(error => {
            res.status(400).send({
                error: error
            })
        })
}));




module.exports = router;
