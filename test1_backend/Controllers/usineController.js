const usine = require("../models/usineSchema");
displayusine = async(req,res)=>{
    try {
        await usine.find({}).
        then(result=>{res.send(result)})
        
    } catch (error) {
        console.log(error)
        console.log("Cannot display usines !");
    }
}
addusine = async(req,res)=>{
    try {
        let new_usine = new usine({
            usine_name:req.body.usine_name,
            adress: req.body.adress,
            machines: req.body.machines
        })
        await new_usine.save();
        res.send("save usine success")
        
    } catch (error) {
        console.log(error)
        console.log("cannot add new usine !")
    }
}
updateusine = async(req,res)=>{
    try {
        await usine.findOneAndUpdate({id:req.params.id},{
            usine_name:req.body.usine_name,
            adress:req.body.adress,
            machines:req.body.machines
        })
        res.send("update usine with sucess ")
    } catch (error) {
        res.send(error)
        
    }
}
deleteusine = async(req,res)=>{
    try {
        await usine.findOneAndDelete({id:req.params.id})
        res.send("Delete usine success")
    } catch (error) {
        console.log("Cannot delete usine");
        console.log(error);
    }
   
} 
    module.exports={
        displayusine,
        addusine,
        updateusine,
        deleteusine
    }