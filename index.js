const express = require("express")
const app = express()

console.dir(app)
let port= 8080
app.listen(port,()=> {
    console.log(`app is listening on port ${port}`)
})
// app.use((req,res) =>{
//     // console.log(req)
//     console.log("request recieved")
//     let code="<h1>fruits</h1><ul><li>mango</li><li>apple</li></ul>"
    
//     res.send(code)
// })

// app.get("/apple", (req,res) =>{
//     res.send("you contacted a aple path")
// })

// app.get("/mango", (req,res) =>{
//     res.send("you contacted a mango path")
// })



app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params
    res.send(`welcome to the page of @${username}.`)
})

app.get("/search", (req,res)=>{
    console.log(req.query)
    res.send("success")
})