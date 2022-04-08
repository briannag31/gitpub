const express = require("express")
const app = express()
const PORT = 3000
const drinks = require("./models/drinks.js")

app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res)=>{
    res.send('welcome to the Gitpub app')
})

app.get("/drinks/", (req,res)=>{
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

app.get("/drinks/:id", (req,res)=>{
    res.render('drinks_show.ejs', {
        drinks:drinks[req.params.id]})
})









app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})