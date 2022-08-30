var express = require("express");
var router = express.Router();
const waba = require("../controllers/wabaController.js");
var { expressjwt: expressJwt } = require("express-jwt");
const jwt = require('jsonwebtoken');
const { validateToken } = require("../middlewares/validateToken");
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt
const url = require('url');
const querystring = require('querystring');


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
//router.all("*", validateToken);
router.get("/", function(req, res, next) {
    if (
        req.query['hub.mode'] == 'subscribe' &&
        req.query['hub.verify_token'] === 'testing'
      ) {
        res.send(req.query['hub.challenge']);
      } else {
        res.sendStatus(400);
      }
});



router.post("/", function(req, res) {
    console.log("zeuswaba")
    res.status(200).send({
        data: req.body   })
});


module.exports = router;