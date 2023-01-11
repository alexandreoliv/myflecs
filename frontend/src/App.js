import axios from "axios";
import { useEffect, useState } from "react";
import Marketplace from "./Components/Marketplace";

console.log("inside App.js");

const jobList = [
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

const App = () => {
	console.log("inside Apps.js/App");
	const [jobs, setJob] = useState([]);

	const createJob = async () => {
		console.log("inside App.js/createJob");
		const id = await axios
			.post(`http://localhost:5005/202`)
			.then((response) => {
				if (response.status === 202) {
					// console.log ('response Location', response.headers.get("Location"))
					// console.log ('full response', response)
					// return response.headers.get("Location");
					return response.data;
				} else {
					throw new Error(
						`Unexpected status code: ${response.status}`
					);
				}
			})
			// .then((location) => {
			//   console.log(`Resource can be found at ${location}`);
			// })
			.catch((error) => {
				console.error(error);
			});
		setJob([...jobs, id])
  }

	useEffect(() => {
		console.log("inside Apps.js/useEffect");
		// const getId = async () => {
		// 	const id = await axios
		// 		.post(`http://localhost:5005/202`)
		// 		.then((response) => {
		// 			if (response.status === 202) {
		// 				// console.log ('response Location', response.headers.get("Location"))
		// 				// console.log ('full response', response)
		// 				// return response.headers.get("Location");
		// 				return response.data;
		// 			} else {
		// 				throw new Error(
		// 					`Unexpected status code: ${response.status}`
		// 				);
		// 			}
		// 		})
		// 		// .then((location) => {
		// 		//   console.log(`Resource can be found at ${location}`);
		// 		// })
		// 		.catch((error) => {
		// 			console.error(error);
		// 		});
		// 	setId(id);
		// };

		if (jobs.length === 0) {
			setJob(jobList.map((j) => j.id));

			console.log("jobs", jobs);
		}
	});

	return <Marketplace handleCreateJob={createJob} jobs={jobs}></Marketplace>;
};

export default App;
