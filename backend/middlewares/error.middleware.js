module.exports = (err,req,res,next)=>{
    console.error(err);
    res.status(500).json({
        message: err.message || "Ocurrio un error interno de servidor"
    })
}










