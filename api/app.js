var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { expressjwt: jwt } = require("express-jwt");


var indexRouter = require('./routes/index');
var sendTemplate = require("./routes/sendtemplate");
var createTemplate = require("./routes/createtemplate");
var getTemplates = require("./routes/gettemplates");
var textMessage = require("./routes/textmessage");
const { isObject } = require('util');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));


app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use("/sendtemplate", sendTemplate);
app.use("/createtemplate", createTemplate);
app.use("/gettemplates", getTemplates);
app.use("/textmessage", textMessage);

//app.use("/token", tokenRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // send back an easily understandable error message to the caller
  //console.log('Backend Error', err)
  //if (err.response.data instanceof Object)
  res.status(500).send(err.response.data)
  //else
    //res.status(500).send(err.data)
  //res.render('error');
});

module.exports = app;
