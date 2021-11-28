const express=require("express")
const router=express.Router()
const Articl=require("../models/Articl")
const isAuth=require("../middlewares/passport")
// add articl
router.post("/add",isAuth(),async (req,res)=>{
    try {
        const newArticl = new Articl({title:req.body.title,photo:req.body.photo,nameNutri:req.body.nameNutri,desc:req.body.desc})
await newArticl.save();
res.send(newArticl)
    } catch (error) {
        console.log(error)
        res.status(500).json({errors:error})
    }
})
// get all articls
router.get("/allarticls",isAuth(),async(req,res)=>{
    try {
        const articls= await Articl.find()
        res.send(articls)
    } catch (error) {
        res.status(500).json({errors:error})
    }
})

//UPDATE ARTICL
router.put("/:id", async (req, res) => {
    try {
      const articl = await Articl.findById(req.params.id);
      if (articl.nameNutri === req.body.nameNutri) {
        try {
          const updatedArticl = await Articl.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedArticl);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your articl!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE ARTICL
  router.delete("/:id", async (req, res) => {
    try {
      const articl = await Articl.findById(req.params.id);
      if (articl.nameNutri === req.body.nameNutri) {
        try {
          await articl.delete();
          res.status(200).json("articl has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can delete only your articl!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
//prenez RDV
router.post("/RDV",isAuth(),async(req,res)=>{
    try {
        const newRDV= new RDV ({name:req.body.name,age:req.body.age,})
        res.send(newRDV)
    } catch (error) {
        
    }
})
module.exports=router
