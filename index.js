const express = require('express')
const app = express();
const port = 9001;
const heroController = require('./controller/hero.controller');
const bodyParse = require('body-parser')
app.use(express.static('public'))

app.use(bodyParse.urlencoded({extended : false}))
app.set("view engine", "ejs")
app.set("views", "view")

app.use('/hero', heroController)

app.get('/', (req, res) => {
    res.render('landing-page')
  })

app.get('/tambah', (req, res) => {
    res.render('tambah')
  })



app.listen(port, ()=>{
    console.log("server running onpm i body-parsern port " + port);
})