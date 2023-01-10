const Marketplace = (props) => {
    // console.log("props", props)
    const { handleCreateJob } = props;

	return <div>
    
    <input
					type="button"
					id="seach-input"
					className="form-control"
					placeholder="Create job"
					aria-label="Search"
					value="Create job"
					onChange={handleCreateJob}
				/>

                <p>Jobs:</p>
    
    </div>;
};

export default Marketplace;