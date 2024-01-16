const mongoose=require('mongoose');
const connect=mongoose.connect("mongodb+srv://SAKET:CHfxIRcWEhRfuHCJ@cluster0.hbdz4wn.mongodb.net/Login-tut");
connect.then(()=>{
    console.log('DB connected');
})
.catch(()=>{
    console.log('DB connectio failed');
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required : true
    }, 
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required : true
    }
});

const collection=new mongoose.model("users", LoginSchema);
module.exports=collection;