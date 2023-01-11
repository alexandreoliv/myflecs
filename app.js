require("dotenv/config");
const express = require("express");
const app = express();
require("./config")(app);

// routes
app.post("/202", (req, res) => {
	const id = Math.floor(Math.random() * 1000);
	console.log("id", id);
	res.status(202).location(`/new-location/${id}`).send(String(id));
});

// app.get("/jobs", (req, res) => {
// 	res.status(200).send(jobs);
// });

// app.get("/jobs/:jobId", (req, res) => {
// 	const job = jobs.filter(j => j.id === Number(req.params.jobId));
// 	res.status(200).send(job);
// });

app.get("/api/", (req, res) => {
	res.send("hello world");
});

app.get("/", (req, res) => {
	res.send("hello world");
});

// app.use(express.static(path.join(__dirname, "/frontend/build")));

// app.use((req, res) => {
// 	// if no routes match, send them the React HTML
// 	res.sendFile(__dirname + "/frontend/build/index.html");
// });
// end of routes

module.exports = app;
