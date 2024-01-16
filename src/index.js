const path=require('path');
const express=require('express');
const bcrypt=require('bcrypt');
const collection=require('./config');
const { urlencoded } = require('body-parser');

const app=express();

app.set('views',`${__dirname}/../views`);
app.set('view engine','ejs');
app.use(express.static(`${__dirname}/../public`));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res)=>{
    res.render("login");
})

app.get('/register',(req, res)=>{
    res.render("register");
})

app.post('/register',async (req, res)=>{
    const data={
        name:req.body.username,
        email:req.body.email,
        password:req.body.password
    }
    const existingUser=await collection.findOne({email:data.email});
    if(existingUser){
        res.send("user already exists!")
    }
    else{
    const hashpassword=await bcrypt.hash(data.password, 10);
    data.password=hashpassword;
    const userdata=await collection.insertMany(data);
    console.log(userdata);
    res.render('home');
    }
})

app.post('/login',async (req, res)=>{
    try{
    const check=await collection.findOne({name:req.body.username});
    if(!check){
        res.send("user name can't be found!")
    }
    const ispassword=await bcrypt.compare(req.body.password, check.password);
    if(ispassword){
        res.render('home');
    }
    else{
        res.send("wrong password!");
    }
    }
    catch{
        res.send('wrong details');
    }
})

const port=5500;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})
