const express = require("express")
const fs = require("fs")
const path = require("path");

const dirpath = path.join(__dirname,"Timestamps")


const app = express()

const port = 3000;

app.use(express.static("Timestamps"))

app.get('/', function (req, res) {
  res.send('Hii !!!')
})

app.get("/static",(req,res)=>{
    let time = new Date();
    let dateString = time.toUTCString().slice(0,-3)
   // console.log(dateString)
    const content =`Timestamp created ${dateString}`

    fs.writeFileSync(`${dirpath}/date-time.txt`,content,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file created sucessfully")
        }
    })

    res.sendFile(path.join(__dirname,"Timestamps/date-time.txt"))

})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});