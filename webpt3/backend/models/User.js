const mongoose =require('mongoose');

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    message:String,
    image:String
});
module.exports=mongoose.model('user',userSchema);


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   image: String,
// });

// module.exports = mongoose.model('User', userSchema);
