import express from "express";
import morgan from "morgan";

// import routes
import userRouter from "./routes/UserRoutes/user.router.js";
import categoryRouter from "./routes/CategoryRoutes/category.router.js";
import productRouter from "./routes/ProductRoutes/product.router.js";

// import middlewares
import authMW from "./middelwares/authMW.js";
import custemRegstrMW from "./middelwares/custemRegstrMW.js";
import notFoundMW from "./middelwares/notFoundMW.js";



const app = express();

// middlewares

app.use(morgan("dev"));
app.use(custemRegstrMW);
app.use(authMW);
app.use(express.json());
// Routes HOME
//

app.get("/", (req, res) => {
  return res.status(200).send("Welcom to home");
});

// mounting
// USERs

app.use("/api/users", userRouter);


app.use("/api/categories", categoryRouter);
app.use("/api/product", productRouter);

//not found
// start with / and no have routes
app.use(notFoundMW);

export default app;
