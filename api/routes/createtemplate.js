var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');
const { validateToken, generateAccessToken, login } = require("../middlewares/validateToken");
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt
const Ajv = require("ajv")


///const passwordHash = '$2b$10$ET29p5cc4nAGsfVkPNrFQ.4ZhyUAQitnKGRkoXdqWmpQsUlJnsJXu'
//const privateKey= 'mykey'
//const username = 'myuser'
/**********   Text Template Schema   ******** */
const textTemplateSchema = {
    type: "object",
    properties: {
        template_name: {
            type: "string",
            description: "Number destination",
            minLength:1
        },
        language: {
            type: "string",
            description: "Text Message",
        },
        category: {
            type: "string",
            description: "waba id from number",
            //pattern: "/^\\d+$/"
            //minLength: 8,
            //maxLength: 24,
        },
        template_text: {
            type: "string",
            description: "Template text",
            minLength: 1
        },
        from: {
            type: "string",
            description: "WABA ID number"
        }
    },
    required: ["template_name", "language", "category", "template_text", "from"],
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
//router.all("*", validateToken);


router.post("/", asyncHandler(async function(req, res) {
    const validate = ajv.compile(textTemplateSchema)
    const valid = validate(req.body)
    if (!valid) {
        res.status(300).send({
            error: true,
            data: validate.errors[0]
        })
    }

    const { template_name, language, category, template_text, from } = req.body
    let sendMessage = await waba.createTextTemplate(template_name, language, category, template_text)
        .then(message => {
            res.status(200).send({
                data: message
            })
        })
}));

//Default 404 route
router.post('*', (req, res) => {
    res.status(404).send('what???');
  });
  


module.exports = router;
