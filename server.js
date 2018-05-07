var express = require('express')
var app = express()
var bp = require('body-parser')
var path = require('path')
var session = require('express-session')
var port = 8000
var mongoose   = require('mongoose');

app.use(express.static(path.join(__dirname, './client/dist')))
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(session({saveUninitialized: true, resave: true, secret: 'cat'}))
require('./server/config/mongoose')
require('./server/config/routes')(app)
//console.log(app)
app.listen(port)