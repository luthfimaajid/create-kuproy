const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


require("dotenv").config();

const siteRoute = require("./src/routes/geosite");
const areaRoute = require("./src/routes/geoarea");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use("/site", siteRoute);
app.use("/area", areaRoute);

app.get("/", (req, res) => {
	res.send("get");
});

app.listen(PORT, () => {
	console.log("run on " + PORT);
});
