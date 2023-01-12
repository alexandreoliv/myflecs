require("dotenv/config");
const express = require("express");
const app = express();
require("./config")(app);

let jobs = [
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
			completion: 4.88,
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
			completion: 1,
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
			completion: 100,
			rate: 500,
		},
		result: {
			code: 0,
			message: "",
		},
	},
];

// const status = ["queued", "running", "cancelled", "successful", "failed"];
const description = [
	"Downloading app",
	"Installing app {app_name}",
	"Installation complete",
];
const numSteps = 10;

// routes
app.post("/createJob", (req, res) => {
	const unitsTotal = Math.floor(Math.random() * 3000000);
	const unitsDone = Math.floor(Math.random() * 30000);
	const completion = Number(((unitsDone / unitsTotal) * 100).toFixed(2));

	const newJob = {
		id: Math.floor(Math.random() * 1000),
		status: "running",
		description: "Installing app {app.name}",
		numSteps,
		currentStep: {
			description:
				description[Math.floor(Math.random() * description.length)],
			num: Math.floor(Math.random() * 10),
			unit: "B",
			unitsTotal,
			unitsDone,
			completion,
			rate: 0,
		},
		result: {
			code: 0,
			message: "",
		},
	};

	jobs.push(newJob);
	res.status(200).send(newJob);
});

app.get("/updateJobs", (req, res) => {
	console.log("inside app.js/updateJobs");
	console.log("jobs.length", jobs.length);
	for (let i = 0; i < jobs.length; i++) {
		jobs[i].currentStep.unitsDone = jobs[i].currentStep.unitsDone * 2;
		if (jobs[i].currentStep.unitsDone >= jobs[i].currentStep.unitsTotal) {
			jobs[i].currentStep.unitsDone = jobs[i].currentStep.unitsTotal;
			jobs[i].status = "successful";
			jobs[i].currentStep.description = "Installation complete";
		}
		jobs[i].currentStep.completion = Number(
			(
				(jobs[i].currentStep.unitsDone /
					jobs[i].currentStep.unitsTotal) *
				100
			).toFixed(2)
		);
	}
	res.status(200).send(jobs);
});

app.get("/resetJobs", (req, res) => {
	console.log("inside app.js/resetJobs");
	jobs = [
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
				completion: 4.88,
				rate: 2048,
			},
			result: {
				code: 0,
				message: "",
			},
		},
		{
			id: 2,
			status: "running",
			description: "Installing app {app_name}",
			numSteps: 3,
			currentStep: {
				description: "Downloading...",
				num: 1,
				unit: "B",
				unitsTotal: 1085761,
				unitsDone: 10857,
				completion: 1,
				rate: 1000,
			},
			result: {
				code: 0,
				message: "",
			},
		},
		{
			id: 3,
			status: "running",
			description: "Installing app {app_name}",
			numSteps: 4,
			currentStep: {
				description: "Downloading...",
				num: 2,
				unit: "B",
				unitsTotal: 185761,
				unitsDone: 183000,
				completion: 98.51,
				rate: 500,
			},
			result: {
				code: 0,
				message: "",
			},
		},
	];
	res.status(200).send(jobs);
});

app.get("/failJob", (req, res) => {
	console.log("inside app.js/failJob");
	const numberOfJobs = jobs.length;
	const random = Math.floor(Math.random() * numberOfJobs);
	jobs[random].status = "failed";
	res.status(200).send(jobs);
});

app.get("/cancelJob", (req, res) => {
	console.log("inside app.js/cancelJob");
	const numberOfJobs = jobs.length;
	const random = Math.floor(Math.random() * numberOfJobs);
	jobs[random].status = "cancelled";
	res.status(200).send(jobs);
});

app.get("/jobs", (req, res) => {
	res.status(200).send(jobs);
});

app.get("/jobs/:jobId", (req, res) => {
	const job = jobs.filter((j) => j.id === Number(req.params.jobId));
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
