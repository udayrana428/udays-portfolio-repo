const mongoose=require("mongoose")
const {Schema}=mongoose
const noteSchema=new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
  })

const Notes=mongoose.model('note',noteSchema)
module.exports=Notes