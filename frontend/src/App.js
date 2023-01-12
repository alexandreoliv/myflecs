import axios from "axios";
import { useEffect, useState } from "react";
import Marketplace from "./Components/Marketplace";

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

  const failJob = async () => {
		console.log("inside App.js/failJob");
		const jobs = await axios
			.get(`http://localhost:5005/failJob`)
			.then((response) => {
				if (response.status === 200) {
					console.log("Random job failed successfully");
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

  const cancelJob = async () => {
		console.log("inside App.js/cancelJob");
		const jobs = await axios
			.get(`http://localhost:5005/cancelJob`)
			.then((response) => {
				if (response.status === 200) {
					console.log("Random job cancelled successfully");
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

	return (
		<Marketplace
			handleCreateJob={createJob}
			handleUpdateJobs={updateJobs}
			handleResetJobs={resetJobs}
      handleFailJob={failJob}
      handleCancelJob={cancelJob}
			jobs={jobs}
		></Marketplace>
	);
};

export default App;
