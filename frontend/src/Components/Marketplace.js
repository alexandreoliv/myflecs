import ProgressBar from "./ProgressBar";
import CircularStatic from "./CircularProgress";

const Marketplace = (props) => {
	console.log("inside Marketplace.js/Marketplace");
	console.log("props", props);
	const {
		handleCreateJob,
		handleUpdateJobs,
		handleResetJobs,
		jobs,
		jobStatus,
	} = props;

	return (
		<div>
			<input
				type="button"
				id="create-job"
				className="form-control"
				placeholder="Create job"
				aria-label="Search"
				value="Create job"
				onClick={handleCreateJob}
			/>

			<input
				type="button"
				id="update-jobs"
				className="form-control"
				placeholder="Update jobs"
				aria-label="Search"
				value="Update jobs"
				onClick={handleUpdateJobs}
			/>

			<input
				type="button"
				id="update-jobs"
				className="form-control"
				placeholder="Reset jobs"
				aria-label="Search"
				value="Reset jobs"
				onClick={handleResetJobs}
			/>

			<p>Jobs: {jobs.map((j) => j + ", ")}</p>

			<p>Job statuses: {jobStatus.map((j) => j + "%, ")}</p>

			<div>
				<p>Progress Bar version 1:</p>
				{jobStatus.map((j) => (
					<ProgressBar
						key={j + Math.floor(Math.random() * 20000)}
						bgcolor="#00695c"
						completion={j}
					/>
				))}
			</div>

			<div>
				<p>Progress Bar version 2:</p>
				{/* {jobStatus.map((j) => (
						// key={j + Math.floor(Math.random() * 20000)}
						<CircularProgress value={j} />
				))} */}
				{jobStatus.map((j) => (
						// key={j + Math.floor(Math.random() * 20000)}
						CircularStatic(j)
				))}
			</div>

		</div>
	);
};

export default Marketplace;
