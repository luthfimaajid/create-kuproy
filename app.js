const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoute = require("./src/routes/user");
const app = express();
const PORT = process.env.PORT || 3000;
const mongouri = process.env.MONGO_URI || "mongodb://localhost/skeleton"
mongoose.connect(mongouri);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use("/user", userRoute);

app.get("/", (req, res) => {
	res.send("get");
});

app.listen(PORT, () => {
	console.log("run on " + PORT);
});
