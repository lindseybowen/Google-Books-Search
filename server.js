const express = require ("express")
const app = express ()
const port = process.env.PORT || 3001

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(require("./routes/api-routes"))

const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks")

app.listen(port,function(){
    console.log("app is listening on port"+port)
})

