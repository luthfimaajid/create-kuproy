const express = require("express");
const cors = require("cors");

require("dotenv").config();

const noteRoute = require("./src/routes/note");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/note", noteRoute);

app.listen(PORT, () => {
	console.log("server run on " + PORT);
});
