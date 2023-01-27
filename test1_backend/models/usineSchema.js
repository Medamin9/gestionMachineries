const mongoose =require('mongoose')

const usineSchema=mongoose.Schema({
    usine_name :{
        type: String,
        required:true
    },
    adress:{
        type:String,
        required:true
    }, 
    machines:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'machine'
    } ]

})
module.exports = mongoose.model("usine",usineSchema)