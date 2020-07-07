
const archivoControles={};
const path = require('path');
const archivos = require("../models/archivo");
const userModel= require('../models/user');
const { dir } = require('console');
const { findOne } = require('../models/user');
const user = require('../models/user');

/*
name: {type: String, required:true},
    email: {type: String, required:true },
    path:{type:String },
    descripcion:{type:String},
    Tipo:{type:String},
    Asignatura:{type:String},
    estado:{type:Boolean, default:false}
*/
archivoControles.agregarArchivo =  async (req, res) => {
    const archivo=(req.files.foo); // obtienesd archivo
    const verificar=await archivos.findOne({name : archivo.name.replace(/ /g,"")})
    if(!verificar){
        
        if(archivo.mimetype!='application/pdf'){
            return res.status(401).json({status:"Solo se permiten archivos de extencion pdf"})
        }
        
        const name=archivo.name.replace(/ /g,"")
        const dir=path.join(__dirname,`../files/${name}`)
        req.files.foo.mv(dir),(err)=>{
            return res.status(500).json({status:"Hubo un error al subir el archivo"});
        };
        const id =req.verificacionID;
        const usuario= await userModel.findById(id);
        if(!usuario){
            return res.status(404).json({
                status: "Usuario inexistente"
            });
        }
        //console.log(usuario)
        // se obtienen datos para guardar en BD
        const { email } = usuario
        const {descripcion, Tipo, Asignatura} =req.body
        
        const nuevoArchivo= new archivos({name, email, dir ,descripcion, Tipo, Asignatura })
        
        nuevoArchivo.save();
        return res.status(200).json({
            status: "Archivo subido con exito"
        });
        }else{
        res.status(500).json({
            status:"Archivo con ese nombre existente"
        })
    }
    
}
archivoControles.verArchivos= async (req,res)=>{
    //const {file} = req.params;
    const cursor=await archivos.find()
    res.status(200).json(cursor)
    //res.sendFile(path.join(__dirname,`../files/${file}`));
}
archivoControles.misArchivos= async (req,res)=>{
    //const {file} = req.params;
    const id= req.verificacionID;
    
    const {email} =await userModel.findById(id);
    
    const cursor=await archivos.find({email:email})
    res.status(200).json(cursor)
    //res.sendFile(path.join(__dirname,`../files/${file}`));
}

archivoControles.mostrarArchivo= async (req,res)=>{
    const { id } = req.params;
    const { dir } = await archivos.findById(id)
    //console.log(dir);
    res.status(200).sendFile(dir)
    
}
archivoControles.eliminarArchivo= async (req,res)=>{
    const { id } = req.params;
    if(!await archivos.findById(id)){
        res.status(404).json({
            status:"Archivo con id no existente"
        })
    }
    await archivos.findByIdAndDelete(id),(err)=>{
        res.status(404).json({
            status:"Ocurrio error al eliminar archivo",
            err
        })
    }
    res.status(200).json({
        status:"Archivo eliminado con exito"
    })
}
archivoControles.cambiarEstado= async(req,res)=>{
    const { _id ,estado } = req.body;
    const idAdmin=req.verificacionID;
    const {admin} = await userModel.findById(idAdmin);
    if(admin){
        await archivos.findByIdAndUpdate(_id,{estado: estado}), (err)=>{
            return res.status(500).res.json("ocurrio error");
        }
        res.status(200).json({
            status :"Estado actualizado"
        })
    }
    else{
        res.status(401).json({
            status :"Usuario no autorizado"
        })
    }
    

}

module.exports= archivoControles;