const getuser=(req,res,next)=>{
    console.log("im middleware")
    next()
}

module.exports=getuser