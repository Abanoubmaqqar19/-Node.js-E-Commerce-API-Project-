export default ((req, res, next) => {
  //
  let auth = true;
  if (auth) {
    console.log(" second middlware  Auth");
    // next to
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
});
