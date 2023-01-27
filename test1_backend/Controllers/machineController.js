const machine = require("../models/machineSchema");

displayMachine = async(req,res)=>{
    try {
        await machine.find({}).
        then(result=>{res.send(result)})
        
    } catch (error) {
        console.log(error)
        console.log("Cannot display machines !");
    }
}
addMachine = async(req,res)=>{
    try {
        let new_machine = new machine({
            usine_name:req.body.usine_name,
            machine_name: req.body.machine_name,
            reference: req.body.reference,
            categorie: req.body.categorie,
            photo: req.body.photo,
            statut:req.body.statut

        })
        await new_machine.save();
        res.send("save machine success")
        
    } catch (error) {
        console.log(error)
        console.log("cannot add new machine !")
    }
}
updateMachine = async(req,res)=>{
    try {
        await machine.findOneAndUpdate({id:req.params.id},{
            usine_name:req.body.usine_name,
            machine_name:req.body.machine_name,
            reference:req.body.reference,
            categorie: req.body.categorie,
            photo: req.body.photo,
            statut:req.body.statut
        })
        res.send("update machine with sucess ")
    } catch (error) {
        res.send(error)
        
    }
}
deleteMachine = async(req,res)=>{
    try {
        await machine.findOneAndDelete({id:req.params.id})
        res.send("Delete machine success")
    } catch (error) {
        console.log("Cannot delete machine");
        console.log(error);
    }
    
}
    module.exports={
        displayMachine,
        addMachine,
        updateMachine,
        deleteMachine
    }