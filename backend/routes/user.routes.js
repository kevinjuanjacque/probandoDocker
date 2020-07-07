const express=require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const user = require('../controller/user.controles');
const archivoControles = require('../controller/archivo.controles');


/*****************************************
 ****************ARCHIVO*****************
 +****************************************/

router.post('/file/upload',verificacionToken,archivoControles.agregarArchivo );
router.get('/file/:id',archivoControles.mostrarArchivo);
router.get('/file/',archivoControles.verArchivos);
router.get('/Misfile/',verificacionToken,archivoControles.misArchivos);
router.delete('/file/eliminar/:id',verificacionToken,archivoControles.eliminarArchivo);
router.put('/file/actualizarEstado',verificacionToken,archivoControles.cambiarEstado);

/**************************************
 * ************************************
 ***************************************/

 //antes de correr comentar obtener usuario y eliminar
router.get('/api/',user.obtenerUsuario);
router.get('/api/unico',verificacionToken,user.obtenerUnicoUsuario);
router.post('/api/createUser',user.createUser);
router.post('/api/IniciarSesion',user.sesion);
//router.post('/api/IniciarSesion',verificacionToken,user.sesion);
router.put('/api/cambiarPass',verificacionToken,user.cambiarPass);
router.delete('/:id',user.eliminar);
//router.put('/api/activarAdmin',user.activarAdmin);






function verificacionToken (req,res,next)  {
   
    
    if(!req.headers.authorization){return res.status(401).json({status:'ACCESO DENEGADO PRIMERO DEBES INICIAR SESION'})}
    const token = req.headers.authorization.split(' ');
    if(token[1] === ''){return res.status(401).json({status:'ACCESO DENEGADO, SIN TOKEN'})}
    if(token[0]!='Bearer'){return res.status(401).json({status:'ACCESO DENEGADO, ERROR CON AUTHORIZATION'})}
    const toke=jwt.decode(token[1].toString(),'secretkey');
    req.verificacionID=toke._id;
    //console.log(req.verificacionID)
    next();
}
module.exports=router;