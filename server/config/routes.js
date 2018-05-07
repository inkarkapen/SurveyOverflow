var controller = require('./../controllers/controller')
var path = require('path')
module.exports = function(app){
    app.post('/login', function(req, res){
        //console.log('routes work!')
        controller.login(req,res)
    })
    app.get('/logout', function(req,res){
        controller.logout(req,res)
    })
    app.get('/checkSession', function(req,res){
        //console.log('in checkSession routes')
        controller.checkSession(req,res)
    })
    app.post('/create', function(req, res){
        //console.log('in routes, ', req.body)
        controller.create(req,res)
    })
    app.get('/getAll', function(req, res){
        controller.getAll(req, res)
    })
    app.post('/delete', function(req, res){
        //console.log('in routes delete, ', req.body)
        controller.delete(req, res)
    })
    app.get('/showOne/:id', function(req, res){
        //console.log('in the routed ShowOne')
        controller.showOne(req, res)
    })
    app.post('/vote', function(req, res){
        controller.vote(req, res)
    })
    app.all('*', (req,res,next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
    })
}