import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import paymentRoute from "./routes/paymentRoute.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import productRoute from "./routes/productRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

//config
dotenv.config();

//database connection
dbConnect();

//express app
const app = express();

app.use(cors());
app.use(express.json());

app.use("/payment", paymentRoute);

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/category", categoryRoute);

app.get('/', (req, res) => {
    res.json({
        message: "hello"
    })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => `Server is starting on port ${PORT}`);