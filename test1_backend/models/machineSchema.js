const mongoose =require('mongoose')

const machineschema=mongoose.Schema({

    usine_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "usine"
    },
    machine_name:{
        
        type: String,
        required:true
    }, 
    reference:{
        type : String,
        required:true
    },
    categorie:{
        type:String,
        required:true
    },
    photo:{
        type:String,
    },
    statut:{
        type:Number,
        default:1
    } 

})
module.exports = mongoose.model("machine",machineschema)