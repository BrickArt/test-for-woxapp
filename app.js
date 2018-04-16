var express = require('express');
var app = express();
global.__root = __dirname + '/';



// Setup express
app.disable("x-powered-by");



// Add headers
var setHeaders = require(__root + 'src/middleware/setHeaders');
app.use(setHeaders);
app.use(express.static(__root + 'public'));



//routes
var DataController = require(__root + 'src/routes/data/data.controller');
app.use('/api', DataController);

var PagesController = require(__root + 'src/routes/index.router');
app.use('/', PagesController);

app.get('*', function (req, res) {
    res.redirect('/');
});






module.exports = app;