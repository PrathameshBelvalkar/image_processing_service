const responseWrapper = (req, res, next) => {
  res.success = (data, message = "Request successful") => {
    res.status(200).json({
      status: "success",
      message,
      data,
    });
  };

  res.error = (error, statusCode = 400) => {
    res.status(statusCode).json({
      status: "error",
      message: error.message || "An error occurred",
      errors: error.errors || null,
    });
  };

  next();
};

export default responseWrapper;
