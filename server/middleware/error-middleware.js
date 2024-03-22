const ErrorMiddleware= (err,req,res,next)=>{
  const message = err.message || "Internal server error - from error middleware";
  const status = err.status || 400;
  console.log(message);
return res.status(status).json({message});
}

module.exports = ErrorMiddleware;