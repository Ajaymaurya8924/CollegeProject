const mongoose =require("mongoose")

const projectSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    teacherId:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    projectName:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Approve","Pending","Reject"],
        default:"Pending",
        required:true
    },
    description:{
          type:String,
        required:true
    }
},{ timestamps: true })

const projectModel=mongoose.model("project",projectSchema)

module.exports=projectModel