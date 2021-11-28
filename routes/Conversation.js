const express = require("express");
const conversationrouter = express.Router();
const conversationmodel = require('../models/Conversation')



//new post

newconversation= async (req, res) => {
  const newConv = new conversationmodel({
      members:[req.body.senderId,req.body.receiverId,]
  })
  
  try {
      const savedConversation = await newConv.save();
      res.status(200).json(savedConversation)
  } catch (error) {
      res.status(500).json(err);
  }
  
  } 
conversationrouter.post("/newconv",newconversation);

//get post 
getconversation= async (req,res)=> {
  try {
      const conversation = await conversationmodel.find({
  
          members:{ $in:[req.params.userId]}
      })
      res.status(200).json(conversation)
  } catch (error) {
      
  }
  
  } 
conversationrouter.get("/:userId",getconversation
 );
module.exports = conversationrouter;