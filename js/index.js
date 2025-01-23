function populateContent(content) {
	document.getElementById('name').textContent = `${content.name.first} ${content.name.last}`;
}

function populateDataOnLoad() {
	fetch("./data/content.json")
		.then((result) => {
			if (!result.ok) {
				throw new Error(`HTTP error! Status: ${result.status}`);
			}
			return result.json();
		})
		.then((content) => {
			populateContent(content);
		})
		.catch((error) => {
			console.error("Unable to fetch data:", error);
		})
}

populateDataOnLoad();