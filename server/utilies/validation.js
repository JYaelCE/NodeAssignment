const { validationResult} = require('express-validator');
const req = require('express/lib/request');

const validateData = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return res.status(400).send(errors);
    }else{
        next();
    }
}
const validateSesion = (req, res, next) =>{
    if (req.session.authenticated){
        next();
    }
    else {
        return res.status(403).json({msg: "not authorized"})
    }
}

module.exports = {validateSesion, validateData};