import ProgressBar from "./ProgressBar";
import CircularStatic from "./CircularProgress";

const Marketplace = (props) => {
	console.log("inside Marketplace.js/Marketplace");
	const {
		handleCreateJob,
		handleUpdateJobs,
		handleResetJobs,
		handleFailJob,
		handleCancelJob,
		jobs,
	} = props;

	return (
		<div style={{ width: "70vw" }}>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
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

				<input
					type="button"
					id="fail-job"
					className="form-control"
					placeholder="Fail random job"
					aria-label="Search"
					value="Fail random job"
					onClick={handleFailJob}
				/>

				<input
					type="button"
					id="cancel-job"
					className="form-control"
					placeholder="Cancel random job"
					aria-label="Search"
					value="Cancel random job"
					onClick={handleCancelJob}
				/>
			</div>

			<div
				style={{
					background: "black",
					height: "10px",
					margin: "10px 0",
				}}
			></div>

			<p>Jobs: {jobs.map((j) => j.id + ", ")}</p>

			<p>
				Job statuses:{" "}
				{jobs.map((j) => j.currentStep.completion + "%, ")}
			</p>

			<div
				style={{
					background: "black",
					height: "10px",
					margin: "10px 0",
				}}
			></div>

			<div>
				<p>Circular Progress:</p>
				{jobs.map((j) =>
					j.status !== "running" ? (
						j.status.charAt(0).toUpperCase() + " "
					) : (
						CircularStatic(j.currentStep.completion, j.id)
					)
				)}
			</div>

			<div
				style={{
					background: "black",
					height: "10px",
					margin: "10px 0",
				}}
			></div>

			<div>
				<p>Progress Bar:</p>

				{jobs.map((j) =>
					j.status !== "running" ? (
						j.status.charAt(0).toUpperCase() + " "
					) : (
						<ProgressBar
							key={j.id}
							bgcolor="#00695c"
							completion={j.currentStep.completion}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Marketplace;
