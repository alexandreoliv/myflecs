require("dotenv/config");
// require("./db");
const express = require("express");
const app = express();
require("./config")(app);
// const path = require("path");
// const Stats = require("./models/Stats.model");

// routes
app.get("/api/", (req, res) => {
	res.send("hello world");
});

app.get("/", (req, res) => {
	res.send("hello world");
});

// app.get('/202', (req, res) => {
//     res.status(202).location('/new-location').send();
// });

app.post('/202', (req, res) => {
	const id = Math.floor(Math.random() * 1000);
	console.log("id", id)
	res.status(202).location(`/new-location/${id}`).send(String(id));
});

// app.use(express.static(path.join(__dirname, "/frontend/build")));

// app.use((req, res) => {
// 	// if no routes match, send them the React HTML
// 	res.sendFile(__dirname + "/frontend/build/index.html");
// });
// end of routes

module.exports = app;