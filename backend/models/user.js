const mongoose = require('mongoose');
const {Schema} =mongoose;

const userSchema =new Schema({
    nombreCompleto: {type: String, required:true},
    RUT: {type: String, required:true},
    email: {type: String,required:true},
    password: {type: String, required:true},
    admin: {type:Boolean, default:false}
});



module.exports=mongoose.model('user',userSchema);