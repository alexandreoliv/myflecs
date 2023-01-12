import axios from "axios";
import { useEffect, useState } from "react";
import Marketplace from "./Components/Marketplace";

console.log("inside App.js");

const App = () => {
	console.log("inside Apps.js/App");
	const [jobs, setJob] = useState([]);

	const createJob = async () => {
		console.log("inside App.js/createJob");
		const job = await axios
			.post(`http://localhost:5005/createJob`)
			.then((response) => {
				if (response.status === 200) {
					return response.data;
				} else {
					throw new Error(
						`Unexpected status code: ${response.status}`
					);
				}
			})
			.catch((error) => {
				console.error(error);
			});
		setJob([...jobs, job]);
	};

	const updateJobs = async () => {
		console.log("inside App.js/updateJobs");
		const jobs = await axios
			.get(`http://localhost:5005/updateJobs`)
			.then((response) => {
				if (response.status === 200) {
					console.log("Jobs updated successfully");
					return response.data;
				} else {
					throw new Error(
						`Unexpected status code: ${response.status}`
					);
				}
			})
			.catch((error) => {
				console.error(error);
			});
		setJob(jobs.map((j) => j));
	};

	const resetJobs = async () => {
		console.log("inside App.js/resetJobs");
		const jobs = await axios
			.get(`http://localhost:5005/resetJobs`)
			.then((response) => {
				if (response.status === 200) {
					console.log("Jobs resetted successfully");
					return response.data;
				} else {
					throw new Error(
						`Unexpected status code: ${response.status}`
					);
				}
			})
			.catch((error) => {
				console.error(error);
			});
		setJob(jobs.map((j) => j));
	};

	useEffect(() => {
		console.log("inside Apps.js/useEffect");
		if (jobs.length === 0) {
			console.log("if (jobs.length === 0) {");
			resetJobs();
			console.log("jobs", jobs);
			return;
		}
	});

	// const autoUpdateJobs = () => {
	// 	console.log("inside App.js/autoUpdateJobs");

	// 	if (jobStatus.length > 0) {
	// 		const unfinishedInstallations = jobStatus.filter(
	// 			(j) => Number(j) < 100
	// 		);
	// 		console.log("unfinishedInstallations", unfinishedInstallations);
	// 		if (unfinishedInstallations.length > 0) {
	// 			console.log("I'll update again");
	// 			updateJobs();
	// 		}
	//     else clearInterval(intervalId)
	// 	}
	// };

	// const intervalId = setInterval(autoUpdateJobs, 1000);

	return (
		<Marketplace
			handleCreateJob={createJob}
			handleUpdateJobs={updateJobs}
			handleResetJobs={resetJobs}
			jobs={jobs}
		></Marketplace>
	);
};

export default App;
