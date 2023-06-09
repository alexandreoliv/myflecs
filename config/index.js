const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// middleware configuration
module.exports = (app) => {
	app.set("trust proxy", 1);
	app.use(
		cors({
			credentials: true,
			origin: "http://localhost:3000"
		})
	);

	app.use(logger("dev"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
};