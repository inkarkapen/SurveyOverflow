mongoose = require('mongoose')
var User = mongoose.model('User')
var Survey = mongoose.model('Survey')
module.exports = {
    login: function(req, res){
        User.findOne({name: req.body.name}, function(err, userFound){
            if(userFound == null){
                User.create({name: req.body.name}, function(err, userCreated){
                    req.session.user = userCreated
                    res.json('success')
                })
            }
            else{
                req.session.user = userFound
                res.json('success')
            }
        })
    },
    logout: function(req,res){
        req.session.destroy()
        res.redirect('/')
    },
    checkSession: function(req, res){
        //console.log('in checkSession Controller')
        if(req.session.user){
            return res.json(req.session.user)
        }
        else{
            res.json(null)
        }
    },
    create: function(req,res){
        //console.log('in controller create', req.body)
        User.findOne({_id: req.session.user['_id']}, function(err, user){
            //console.log(userFound)
            var survey = new Survey(req.body);
            survey._creator = user;
            user.surveys.push(survey)
            survey.save(function(err){
                user.save(function(err){
                    if(err) {
                        console.log('Error');
                   } else {
                       //console.log('user ', user)
                       //console.log('survey ', survey)
                        res.json({'user': user, 'survey': survey});
                   }
                })
            });
        })
    },
    getAll: function(req, res){
        Survey.find({}, function(err, foundSurveys){
            res.json(foundSurveys)
        })
    },
    delete: function(req, res){
        Survey.remove({_id: req.body._id}, function(err, deletedSurvey){
            //console.log(deletedSurvey)
            res.json('success')
        })
    },
    showOne: function(req, res){
        //console.log(req.params.id)
        Survey.findOne({_id: req.params.id}, function(err, foundSurvey){
            res.json(foundSurvey)
        })
    },
    vote: function(req, res){
        //console.log(req.body.surveyId)
        Survey.findOne({_id: req.body.surveyId}, function(err, foundSurvey){
            //console.log(foundSurvey)
            foundSurvey['option'+req.body.index+'Votes'] += 1
            foundSurvey.save(function(err){
                if(err) {
                    console.log('Error');
               } else {
                    res.json('success');
               }
            })
        })
    }
}