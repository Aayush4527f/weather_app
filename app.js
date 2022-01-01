require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine' , 'ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/key' ,(req,res)=>{
    res.json(process.env.APIKEY)
})

app.listen(80, ()=> {
    console.log(`server started on port 80`);
});