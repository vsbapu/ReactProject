const express=require('express');
const router=express.Router();
const multer =require('multer')
const User=require('../models/User');
const path=require('path');


// multer config

const storage=multer.diskStorage({
  destination:function(req,file,cd){
    cd(null,'uploads/')
  },
  filename:function(req,file,cd){
    cd(null,Date.now() + path.extname(file.originalname))
  }
});
const upload=multer({storage:storage});

//create

router.post('/create',upload.single('image'),async(req,res)=>{
    const {name,email,number,message}=req.body;
    const user=new User({
        name,
        email,
        number,
        message,
        image:req.file.filename,
    });
    await user.save();
    res.json(user);
});

// read

router.get('/all',async(req,res)=>{
    const users= await User.find();
    res.json(users);
});

// Update

router.post('/update/:id',upload.single('image'),async(req,res)=>{
    const {name,email,number,message}=req.body;
    const updateDate= {name,email,number,message};
    if (req.file) {
        updateDate.image=req.file.filename;
    }
    else{
        const user=await User.findByIdAndUpdate(req.params.id,updateDate,{new:true});
        res.redirect('/admin');
    }
}); 

//delete

router.get('/delete/:id',async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/admin');
});

// view Admin Ejs

router.get('/admin',async(req,res)=>{
    const users= await User.find();
    res.render('index',{users});
});
module.exports =router;


