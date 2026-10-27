const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
const { paymentRouter } = require("./routes/payment.route");
const { productsRouter } = require("./routes/products.route");
const app = express();

app.use(express.json());



app.get("/", (req, res)=>{
    res.send("Heyy, from backend server")
});

app.use("/api/payments", paymentRouter);
app.use("/api/products", productsRouter);
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

server.on("error", (error) => {
   console.error("Server failed to start:", error.message);
   process.exitCode = 1;
});

connection
   .then(() => console.log("Connected to database successfully"))
   .catch((error) => console.error("MongoDB connection failed:", error.message));
