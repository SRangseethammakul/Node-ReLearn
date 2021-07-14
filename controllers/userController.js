const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.index = (req, res, next) => {
    res.status(200).json({message : "act"});
}
exports.register =async (req, res, next) => {
    try{
        const { name, email, password} = req.body;

        //validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error = new Error('format invalid');
            error.statusCode = 422;
            error.validation = errors.array();
            throw error;
        }

        //check email
        const existEmail = await User.findOne({email : email});
        if(existEmail){
            const error = new Error('email repeat');
            error.statusCode = 400;
            throw error;
        }
        let user = new User();
        user.name = name;
        user.email = email;
        user.password = await user.encryPassword(password);
        await user.save();
        res.status(201).json({message : "registed"});
    }catch(error){
        next(error);
    }
}
exports.login =async (req, res, next) => {
    try{
        const { email, password} = req.body;

        //check email exist system
        const user = await User.findOne({email : email});
        if(!user){
            const error = new Error('not found user');
            error.statusCode = 404;
            throw error;
        }
        // compare password ถ้าไม่ตรง Return false
        const isValid = await user.checkPassword(password);
        if(!isValid){
            const error = new Error('password invalid');
            error.statusCode = 401;
            throw error;
        }
        res.status(200).json({message : "login success"});
    }catch(error){
        next(error);
    }
}