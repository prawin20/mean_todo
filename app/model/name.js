var mongoose = require("mongoose");
module.exports=mongoose.model("lists",{name:{type:String,default:''}});