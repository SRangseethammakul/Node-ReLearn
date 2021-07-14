const User = require('../models/user');
exports.index = (req, res, next) => {
    res.status(200).json({message : "act"});
}
exports.register =async (req, res, next) => {
    try{
        const { name, email, password} = req.body;

        //check email
        const existEmail = await User.findOne({email : email});
        if(existEmail){
            const error = new Error('email ซ้ำ');
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
exports.login = (req, res, next) => {
    res.status(200).json({message : "login"});
}