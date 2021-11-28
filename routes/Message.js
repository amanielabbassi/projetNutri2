const express = require("express");
const messagerouter = express.Router();
const messagemodel = require('../models/Message')


//add
const newmessage= async (req, res) => {
  const newMsg = new messagemodel(req.body)
  try {
      const savedMessage = await newMsg.save();
      res.status(200).json(savedMessage)
  } catch (error) {
      res.status(500).json(error)
  }
}
messagerouter.post("/newmsg",newmessage);
//get 
getmessage= async (req, res) => {
  try {
      const messages = await messagemodel.find({
          conversationId:req.params.conversationId
      })
      res.status(200).json(messages)
  } catch (error) {
       res.status(500).json(error)
  }
  
  }
messagerouter.get("/:conversationId",getmessage);
module.exports = messagerouter;