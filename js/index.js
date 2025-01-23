function populateDataOnLoad() {
	fetch("./data/content.json")
		.then((result) => {
			if (!result.ok) {
				throw new Error(`HTTP error! Status: ${result.status}`);
			}
			return result.json();
		})
		.then((content) => {
			console.log(content);
		})
		.catch((error) => {
			console.error("Unable to fetch data:", error);
		})
}

populateDataOnLoad();