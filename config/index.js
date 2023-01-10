const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// middleware configuration
module.exports = (app) => {
	app.set("trust proxy", 1);
	app.use(
		cors({
			credentials: true,
			origin: process.env.ORIGIN || "http://localhost:5005" || "http://localhost:3000" || "http://localhost:3001"
		})
	);

	app.use(logger("dev"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
};