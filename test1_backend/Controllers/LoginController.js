const user =require("../models/userSchema")
const jwt =require("jsonwebtoken")
const JWT_SCRET="qdsdgf6z5e4t64zere*zeéù$ùù*sdf,ker,ioensdfnlzekjsvkjmr86zerzer6azazeazeaz565"
login = async(req,res)=>{
    const email = req.body.email;
    const password=req.body.password;

    const user = await User.findOne({email});

    if (!user){
        return res.json({error:"user not found"})
    }
    if(await bcrypt.compare(password,user.password)){
         const token =jwt.sign({},JWT_SCRET)
    }else{
        return res.json({error:"error"})
    }
    res.json({status:"error",error:"invalid password"});
      
}