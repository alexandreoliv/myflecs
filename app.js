require("dotenv/config");
const express = require("express");
const app = express();
require("./config")(app);

const jobs = [
	{
		id: 1,
		status: "running",
		description: "Installing app {app_name}",
		numSteps: 5,
		currentStep: {
			description: "Downloading...",
			num: 3,
			unit: "B",
			unitsTotal: 10485761,
			unitsDone: 512000,
			rate: 2048,
		},
		result: {
			code: 0,
			message: "",
		},
	},
	{
		id: 2,
		status: "failed",
		description: "Installing app {app_name}",
		numSteps: 3,
		currentStep: {
			description: "Downloading...",
			num: 1,
			unit: "B",
			unitsTotal: 1085761,
			unitsDone: 10857,
			rate: 1000,
		},
		result: {
			code: 0,
			message: "",
		},
	},
	{
		id: 3,
		status: "successful",
		description: "Installing app {app_name}",
		numSteps: 4,
		currentStep: {
			description: "Downloading...",
			num: 2,
			unit: "B",
			unitsTotal: 185761,
			unitsDone: 185761,
			rate: 500,
		},
		result: {
			code: 0,
			message: "",
		},
	},
];

// routes
app.post("/202", (req, res) => {
	const id = Math.floor(Math.random() * 1000);
	console.log("id", id);
	res.status(202).location(`/new-location/${id}`).send(String(id));
});

app.get("/jobs", (req, res) => {
	res.status(200).send(jobs);
});

app.get("/jobs/:jobId", (req, res) => {
	const job = jobs.filter(j => j.id === Number(req.params.jobId));
	res.status(200).send(job);
});

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
