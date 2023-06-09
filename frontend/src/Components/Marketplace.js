import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import CircularStatic from "./CircularProgress";
import LinearWithValueLabel from "./LinearProgressWithLabel";

const Marketplace = (props) => {
	console.log("inside Marketplace.js/Marketplace");
	const {
		handleCreateJob,
		handleUpdateJobs,
		handleResetJobs,
		handleFailJob,
		handleCancelJob,
		handleExportApps,
		handleGetExports,
		handleResetExports,
		jobs,
		exports,
	} = props;

	useEffect(() => {
		console.log("inside Marketplace.js/useEffect");
		console.log(
			"amount of jobs still running:",
			jobs.filter((j) => j.status === "running").length
		);
		const timer = setInterval(
			() =>
				jobs.filter((j) => j.status === "running").length > 0
					? handleUpdateJobs()
					: null,
			1000
		);
		return () => {
			clearInterval(timer);
		};
	});

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

				<input
					type="button"
					id="export-apps"
					className="form-control"
					placeholder="Export apps"
					aria-label="Search"
					value="Export apps"
					onClick={handleExportApps}
				/>

				<input
					type="button"
					id="get-exports"
					className="form-control"
					placeholder="Get exports"
					aria-label="Search"
					value="Get exports"
					onClick={handleGetExports}
				/>

				<input
					type="button"
					id="reset-exports"
					className="form-control"
					placeholder="Reset exports"
					aria-label="Search"
					value="Reset exports"
					onClick={handleResetExports}
				/>
			</div>

			<div
				style={{
					background: "black",
					height: "10px",
					margin: "10px 0",
				}}
			></div>

			<p>
				Exports:{" "}
				{exports.map((e) => (
					<p key={e.id}>{JSON.stringify(e)}</p>
				))}
			</p>

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
					j.status !== "running"
						? j.status.charAt(0).toUpperCase() + " "
						: CircularStatic(j.id, j.currentStep.completion)
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

			<div
				style={{
					background: "black",
					height: "10px",
					margin: "10px 0",
				}}
			></div>

			<div>
				<p>Linear Progress Bar:</p>

				{jobs.map((j) => (
					<LinearWithValueLabel
						key={j.id}
						numSteps={j.numSteps}
						step={j.currentStep.num}
					/>
				))}
			</div>
		</div>
	);
};

export default Marketplace;
