const express = require('express')
const app = express()
const dbConnect=require("./config/connectDB")
require('dotenv').config()
dbConnect()
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./client/public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/profil/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  
//middlewares
app.use(express.json())
app.use('/user/',require("./routes/user"))
app.use('/article',require("./routes/ArticleNutri"))
app.use('/profil',require("./routes/userNutri"))
app.use('/conversation',require('./routes/Conversation'));
app.use('/message',require("./routes/Message"));
app.use('/admin',require("./routes/AdminManage"));
const PORT=process.env.PORT

app.listen(PORT, (err) => err?console.log(err):console.log(`app listening on port ${PORT}!`))
