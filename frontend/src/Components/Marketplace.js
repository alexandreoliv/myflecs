import ProgressBar from "./ProgressBar";
import CircularStatic from "./CircularProgress";

const Marketplace = (props) => {
	console.log("inside Marketplace.js/Marketplace");
	const { handleCreateJob, handleUpdateJobs, handleResetJobs, jobs } = props;

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

			<p>Jobs: {jobs.map((j) => j.id + ", ")}</p>

			<p>
				Job statuses:{" "}
				{jobs.map((j) => j.currentStep.completion + "%, ")}
			</p>

			<div>
				<p>Progress Bar version 1:</p>
				{jobs.map((j) => (
					<ProgressBar
						key={j + Math.floor(Math.random() * 20000)}
						bgcolor="#00695c"
						completion={j.currentStep.completion}
					/>
				))}
			</div>

			<div>
				<p>Progress Bar version 2:</p>
				{jobs.map((j) => CircularStatic(j.currentStep.completion))}
			</div>
		</div>
	);
};

export default Marketplace;
