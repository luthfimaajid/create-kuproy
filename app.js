const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const noteRoute = require("./src/routes/note");
const app = express();
const PORT = process.env.PORT 
const mongouri = process.env.MONGO_URI 

mongoose.connect(mongouri);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/note", noteRoute);

app.listen(PORT, () => {
	console.log("server run on " + PORT);
});
