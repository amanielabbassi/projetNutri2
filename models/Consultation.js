const mongoose=require("mongoose");
const ConsultationSchema =new mongoose.Schema({
    name:{type:String ,required : true},
    
    age:{type:Number , required: true},
  weight:{type: Number, required: true},
  height:{type:Number , required: true},
  description:{type:String , required: true},
  choosenutri:{type:String , required: true},
    
})

module.exports=Consultation=mongoose.model("consultation",ConsultationSchema);