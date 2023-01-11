const Marketplace = (props) => {
	// console.log("props", props)
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

			<p>
				Job statuses:{" "}
				{jobStatus.map(
					(j) =>
							(j) + "%, "
				)}
			</p>
		</div>
	);
};

export default Marketplace;
