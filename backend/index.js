// require("dotenv").config();

// const express = require("express");
// const app = express();

// const AuthRouter = require("./routes/AuthRouter");
// const protect = require("./middleware/authMiddleware");



// const mongoose = require("mongoose");
// const bodyParser = require("body-parser")
// const cors = require("cors")

// const { PositionModel } = require("./model/PositionModel");
// const { HoldingModel } = require("./model/HoldingModels");
// const { OrdersModel } = require("./model/OrdersModel")

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// app.use(express.json());


// app.use(cors());
// app.use(bodyParser.json());

// app.use("/auth", AuthRouter);

// app.get("/dashboard", protect, (req, res) => {
//   res.json({
//     message: "Welcome to Build Future Dashboard",
//     userId: req.userId,
//   });
// });


// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingModel.find({});
//   res.json(allHoldings);

// });


// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionModel.find({});
//   res.json(allPositions);

// });

// app.post("/newOrder", async (req,res) => {
//   let newOrder = new OrdersModel({
//       name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,

//   });
//   newOrder.save();

//   res.send("order saved!")

// })



// app.listen(PORT, ()=>{
//     console.log("app started");
//     mongoose.connect(uri);
//     console.log("DB connected");
// })

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const AuthRouter = require("./routes/AuthRouter");
const protect = require("./middleware/authMiddleware");

const { PositionModel } = require("./model/PositionModel");
const { HoldingModel } = require("./model/HoldingModels");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.MONGO_URL;

// MongoDB connection
mongoose
  .connect(uri)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.use("/auth", AuthRouter);

app.get("/dashboard", protect, (req, res) => {
  res.json({
    message: "Welcome to Build Future Dashboard",
    userId: req.userId,
  });
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.send("Order saved!");
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
  });
}

module.exports = app;