require("dotenv").config();

const express = require("express");
const app = express();

const AuthRouter = require("./routes/AuthRouter");
const protect = require("./middleware/authMiddleware");



const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors")

const { PositionModel } = require("./model/PositionModel");
const { HoldingModel } = require("./model/HoldingModels");
const { OrdersModel } = require("./model/OrdersModel")

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.use(express.json());


app.use(cors());
app.use(bodyParser.json());

app.use("/auth", AuthRouter);

app.get("/dashboard", protect, (req, res) => {
  res.json({
    message: "Welcome to Build Future Dashboard",
    userId: req.userId,
  });
});


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);

});


app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);

});

app.post("/newOrder", async (req,res) => {
  let newOrder = new OrdersModel({
      name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,

  });
  newOrder.save();

  res.send("order saved!")

})



app.listen(PORT, ()=>{
    console.log("app started");
    mongoose.connect(uri);
    console.log("DB connected");
})