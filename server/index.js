const express = require("express");
const env = require("dotenv");
const connectDb = require("./config/db");
const app = express();
env.config();
connectDb();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server running at PORT ${PORT}`);
});
