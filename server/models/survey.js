var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true},
    surveys: [{type: mongoose.Schema.Types.ObjectId, ref: 'Surveys'}]
})
mongoose.model('User', UserSchema)

var SurveySchema = new mongoose.Schema({
    question: String,
    option1: String,
    option1Votes: {type: Number, default: 0},
    option2: String,
    option2Votes: {type: Number, default: 0},
    option3: String,
    option3Votes: {type: Number, default: 0},
    option4: String,
    option4Votes: {type: Number, default: 0},
    _creator: {type: mongoose.Schema.Types.Object, ref: 'User'}
}, {timestamps: true})
mongoose.model('Survey', SurveySchema)
