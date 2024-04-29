require('dotenv').config()


const express = require("express")
const app = express()
// port = 8000

app.get('/', (req, res)=>{
    res.send("hello world!")
    console.log("chal gaya");
})

app.get('/twitter', (req, res)=> {
    res.send("hiteshdotcomvarun")
})


app.get("/login", (req, res)=>{
    res.send("<h1>please login at chai  aur code </h1>")
})
app.get("/youtube", (req, res)=>{
    res.send("<h2>chai  aur code </h2>")
})


app.listen(process.env.PORT, ()=>{
    console.log(`example app listening on port ${process.env.PORT}`);
})