const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const saltRounds = 10 //required by bcrypt

const privateKey= 'mykey'

  exports.validateToken = (req, res, next)=>{
    req.user = {username:null, verified:false}
    //const { privateKey } = process.env
    const bearerHeader = req.headers['authorization']

    if (bearerHeader) {
      const bearerToken = bearerHeader.split(' ')[1]
      const decode = jwt.verify(bearerToken, privateKey, function(err, decoded) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.email = decoded.email;
          next();
        }
      });
      
      
    }
    //res.status(401).send('Unauthorized: Invalid token');
  }

  exports.generateAccessToken = function(username) {
    return jwt.sign({ username }, privateKey, { expiresIn: "1800s", });

  }