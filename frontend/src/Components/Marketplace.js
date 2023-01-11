const Marketplace = (props) => {
	// console.log("props", props)
	// const { handleCreateJob } = props;

	const handleCreateJob = () => {
		props.handleCreateJob();
	};

	return (
		<div>
			<input
				type="button"
				id="seach-input"
				className="form-control"
				placeholder="Create job"
				aria-label="Search"
				value="Create job"
				onClick={handleCreateJob}
			/>

			<p>Jobs: {props.jobs.map(j => {
                return j + ", "})}</p>
		</div>
	);
};

export default Marketplace;
