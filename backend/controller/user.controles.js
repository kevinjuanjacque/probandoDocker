const userControles={};

//se importa los modelos de user
const userModel= require('../models/user')
const jwt=require('jsonwebtoken');
const fs = require('fs');

//Metodo post obtener los usuarios
userControles.obtenerUsuario = async (req,res)=>{
    return res.json(await userModel.find());
}

//Metodo post para igresar usuarios
userControles.createUser = async (req,res)=>{
    const {nombreCompleto,RUT,email,password}=req.body;
    const usuarioNuevo =new userModel({nombreCompleto,RUT,email,password});
    const veri=await userModel.findOne({RUT});
    if(!veri){
        await usuarioNuevo.save();
        const token=jwt.sign({_id: usuarioNuevo._id}, 'secretKey');
        res.status(200).json(token);
    }
    else{
        return res.status(401).json('RUT ya existente');
    }
};
//buscar usuario por id con get
userControles.sesion = async (req,res) =>{
    
    
    const { RUT, password}  = req.body;
    const usuario = await userModel.findOne({RUT});
    
    if(!usuario){return res.status(404).json({status: 'Rut no registrado'});}
    if(usuario.password != password) {return res.status(401).json({status:'Password incorrecta'});}
    const token = jwt.sign({_id: usuario._id}, 'secretkey');
    res.status(200).json({
        token: token,
        nombreCompleto: usuario.nombreCompleto
    });
};

//Actualizar contraseña del usuario
userControles.cambiarPass= async(req,res)=>{
    const { id } =req.verificacionID;
    const { password }=req.body;
    await userModel.findByIdAndUpdate(id, {password:password});
    res.json('pass actualizada con exito!')
};
//eliminar usuario

userControles.eliminar =  async (req,res) =>{
    const { id } =req.params;
    await userModel.findByIdAndDelete(id);
    res.json('usuario eliminado con exito');
}
userControles.activarAdmin =async(req,res)=>{
    const{ id } =req.body;
    await userModel.findByIdAndUpdate(id,{admin: true})
    res.status(200).json({
        status:"Usuario activado como admin"
    })
}
userControles.obtenerUnicoUsuario=async(req,res)=>{
    const id=req.verificacionID;
    const usuario=await userModel.findById(id);
    if(!usuario){
        return res.status(404).json({
            status:"Error con id"
        })
    }
    res.status(200).json(usuario.nombreCompleto)
}

//agregar file



module.exports=userControles;

