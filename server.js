const express = require ("express")
const app = express ()
const port = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(require("./routes/api-routes"))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  }
  
const mongoose=require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://lindseybowen:<Raffles@2002>@cluster0.ise6s.mongodb.net/googlebooks?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
)

app.listen(port,function(){
    console.log("app is listening on port"+port)
})


  