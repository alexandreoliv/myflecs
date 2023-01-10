import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
	const [id, setId] = useState("");

	useEffect(() => {
		const getId = async () => {
			const id = await axios
				.post(`http://localhost:5005/202`)
				.then((response) => {
					if (response.status === 202) {
						// console.log ('response Location', response.headers.get("Location"))
						// console.log ('full response', response)
						// return response.headers.get("Location");
						return response.data;
					} else {
						throw new Error(
							`Unexpected status code: ${response.status}`
						);
					}
				})
				// .then((location) => {
				//   console.log(`Resource can be found at ${location}`);
				// })
				.catch((error) => {
					console.error(error);
				});
			setId(id);
		};

		if (!id) getId();
	});

	return <div>ID is {id}</div>;
};

export default App;