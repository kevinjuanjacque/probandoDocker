const mongoose = require('mongoose');
const {Schema} =mongoose;

const filesShema =new Schema({
    name: {type: String, required:true},
    email: {type: String, required:true },
    dir:{type:String },
    descripcion:{type:String},
    Tipo:{type:String},
    Asignatura:{type:String},
    estado:{type:String, default:"Pendiente"}
});
filesShema.method.setFile=function setFile(fileName){
    this.fileURL='http://localhost/public/'+fileName
}



module.exports=mongoose.model('file',filesShema);