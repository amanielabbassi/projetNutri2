const express=require("express")
const router=express.Router()
const User=require("../models/User")
const isAuth=require("../middlewares/passport")
router.get("/profilnutri",isAuth(),async(req,res)=>{
    try {
       const result=await User.findOne({_id:req.user._id})
       res.send(result) 
    } catch (error) {
        res.status(500).json({errors:error})
    }
})
//edit profil
router.put('/edit/:id',
isAuth(),
async(req,res)=>{
    try {
        const response = await User.updateOne({_id:req.params.id}, {$set:{...req.body}})
        const edit = await User.findOne({_id:req.params.id})
        response.modifiedCount?
        res.send({edit, msg:'details edited successfully'}):
        res.send({msg:'no details edited'})
    } catch (error) {
        res.status(400).send({error, msg:"cannot edit profile"})
    }
})
module.exports=router