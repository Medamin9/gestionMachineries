const users =require("../models/userSchema")
const bcrypt = require('bcryptjs')
register = async(req,res)=>{
   // Get body or data 
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;
        const encraptedPassword=await bcrypt.hash(password,10)  
        try {
        const createUser = new users ({
            firstname : firstname ,
            lastname : lastname ,
            email : email,
            password : password, encraptedPassword

        });
        const created = await createUser.save();
        console.log(created);
        res.status(200).json("registred")
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}
module.exports = {
    register
}