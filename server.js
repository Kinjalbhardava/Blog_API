const express = require('express')
const app = express()


//routes
app.get('/', (req, res)=>{
    res.send("Hello Node API");
})


app.listen(3000, ()=> {
    console.log("node API app is runnig on port 3000");
})