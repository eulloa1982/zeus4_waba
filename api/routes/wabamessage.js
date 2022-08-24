var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');
const { validateToken, generateAccessToken, login } = require("../middlewares/validateToken");
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt
const Ajv = require("ajv")

const passwordHash = '$2b$10$ET29p5cc4nAGsfVkPNrFQ.4ZhyUAQitnKGRkoXdqWmpQsUlJnsJXu'
const privateKey= 'mykey'
const username = 'myuser'

/**********   Text Message Schema   ******** */
const textMsgSchema = {
    type: "object",
    properties: {
      to: {
        type: "string",
        description: "Number destination",
      },
      message: {
        type: "string",
        description: "Text Message",
      },
      from: {
        type: "string",
        description: "waba id from number",
        //pattern: "/^\\d+$/"
        //minLength: 8,
        //maxLength: 24,
      },
      context: {
        type: "object",
        maxProperties: 1, 
        description: "Mandatory fields if message is reply {message_id: number_reply}"
      }
    },
    required: ["to", "message", "from"],
    additionalProperties: false,
};
  
const ajv = new Ajv()


//wrapper around async middleware
const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

/* login app */
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


/**
 * send a text message
 * /wabamessage endpoint
 * body data
 * @to 'phone_destination'
 * @message "message"
 * @from 'waba ID Number'
 * @context {"message_id": "message_reply_id"}}
 * please check textMsgSchema to validate fields
 * 
 */
router.post("/", asyncHandler(async function(req, res) {
    const validate = ajv.compile(textMsgSchema)
    const valid = validate(req.body)
    if (!valid) {
        res.status(300).send({
            error: true,
            data: validate.errors[0]
        })
    }
    
    const { to, message, from, context } = req.body
    let sendMessage = await waba.sendTextMessage(to, message, from, context)
        .then(message => {
            res.status(200).send({
                data: message
            })
        })
}));

router.post('*', (req, res) => {
    res.status(404).send('what???');
  });
  


module.exports = router;
