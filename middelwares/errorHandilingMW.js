export default (error, req, res, next) => {
  let statusCode = error.status || 500;
  let message = error.message || "Internal Server Error";

  //ongoDB plicate key
  if (error.code === 11000) {
    statusCode = 400; // Bad Request
    const field = Object.keys(error.keyValue)[0];
    const value = error.keyValue[field];
    message = `${field} with value ${value} already exists`;
    }

    let errors;
    if (error.name === "ValidationError") {
        errors = Object.values(error.errors).map((element) => {
            return {
                field :element.message ,
                message: element.message
            }
        })

        
    }

 

  return res.status(statusCode).json({
    status: "error",
      message,
    ...(errors && { errors })
  });
};
