var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');
const { validateToken } = require("../middlewares/validateToken");
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt
const Ajv = require("ajv")
const axios = require("axios");

/**********   Text Message Schema   ******** */
const templateTextMsgSchema = {
    type: "object",
    properties: {
      to: {
        type: "string",
        description: "Number destination",
        minLength: 5
      },
      template_name: {
        type: "string",
        description: "Text Message",
        minLength: 1
      },
      from: {
        type: "string",
        description: "waba id from number",
        minLength: 5
        //pattern: "/^\\d+$/"
        //minLength: 8,
        //maxLength: 24,
      },
      language: {
        type: "string",
        minLength: 1, 
        description: "language"
      }
    },
    required: ["to", "template_name", "from", "language"],
    additionalProperties: false,
};
  
const ajv = new Ajv()

//wrapper around async middleware
const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};


router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

//protect all other routes
router.all("*", validateToken);



/**
/sendtemplate
* send whatsapp template text message
@param {string} from numeric WhatsApp business number
@param {string} to recipient
@param {string} message text message
@param {string} language
*/

router.post("/", asyncHandler(async function(req, res, next) {
    const validate = ajv.compile(templateTextMsgSchema)
    const valid = validate(req.body)
    if (!valid) {
        res.status(300).send({
            error: {'message': validate.errors[0].message},
        })
    }

    let sendMessage = await waba.sendTemplateMessage(req, res, next)
    
}));

//Default 404 route
router.post('*', (req, res) => {
    res.status(404).send('what???');
  });
  


module.exports = router;
