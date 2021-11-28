const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    password: String,
    phone: String,
    role:{type:String, enum:["patient","admin","nutritionniste"] }
})

module.exports=User=mongoose.model('user',UserSchema)