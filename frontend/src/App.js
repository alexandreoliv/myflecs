import axios from "axios";
import { useEffect, useState } from "react";
import Marketplace from "./Components/Marketplace";

console.log("inside App.js");

const App = () => {
	console.log("inside Apps.js/App");
	const [jobs, setJob] = useState([]);
	const [jobStatus, setJobStatus] = useState([]);

	const createJob = async () => {
		console.log("inside App.js/createJob");
		const { id, completion } = await axios
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
		setJob([...jobs, id]);
		setJobStatus([...jobStatus, completion]);
	};

	const updateJobs = async () => {
		console.log("inside App.js/updateJobs");
		const jobStatus = await axios
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
		console.log("jobStatus", jobStatus);
		setJobStatus(jobStatus.map(j => j.currentStep.completion));
	};

	const resetJobs = async () => {
		console.log("inside App.js/resetJobs");
		const jobStatus = await axios
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
		console.log("jobStatus", jobStatus);
		setJob(jobStatus.map(j => j.id));
		setJobStatus(jobStatus.map(j => j.currentStep.completion.toFixed(2)));
	};

	useEffect(() => {
		console.log("inside Apps.js/useEffect");
		if (jobs.length === 0) {
			console.log("if (jobs.length === 0) {");
			// setJob(jobList.map((j) => j.id));
      resetJobs();
			console.log("jobs", jobs);
		}

		// if (jobStatus.length === 0) {
		// 	console.log("if (jobStatus.length === 0) {");
		// 	setJobStatus(
		// 		jobList.map((j) =>
		// 			(
		// 				(j.currentStep.unitsDone / j.currentStep.unitsTotal) *
		// 				100
		// 			).toFixed(2)
		// 		)
		// 	);
		// 	console.log("jobStatus", jobStatus);
		// }
	});

	return (
		<Marketplace
			handleCreateJob={createJob}
			handleUpdateJobs={updateJobs}
			handleResetJobs={resetJobs}
			jobs={jobs}
			jobStatus={jobStatus}
		></Marketplace>
	);
};

export default App;
