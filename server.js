const express = require("express")
const app = express()
const PORT = 3000
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")


app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.get("/drinks/", (req,res)=>{
    res.render('drinks_index.ejs', {
        allDrinks: drinks
    })
})

app.get("/drinks/:id", (req,res)=>{
    res.render('drinks_show.ejs', {
        drink:drinks[req.params.id]})
})

app.get("/food/", (req,res)=>{
    res.render('food_index.ejs', {
        allFood: food
    })
})

app.get("/food/:id", (req,res)=>{
    res.render('food_show.ejs', {
        item:food[req.params.id]})
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})