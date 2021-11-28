const mongoose=require("mongoose");
const articlSchema =new mongoose.Schema({
    title:{type:String ,required : true},
    desc:{type:String , required: true},
    nameNutri:{type:String , required: true},
    photo:{type:String , required: false}
    
})

module.exports=Articl=mongoose.model("articl",articlSchema);