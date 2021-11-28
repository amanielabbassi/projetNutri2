const mongoose = require("mongoose")

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGOdb_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("database successfuly connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect