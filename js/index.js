function populateContent(content) {
	document.getElementById('name').textContent = `${content.name.first} ${content.name.last}`;
	document.getElementById('location').textContent = `${content.location.city}, ${content.location.state}`;
	document.getElementById('phone-number').textContent = `${content.contact.phone-number}`;
	document.getElementById('email-address').textContent = `${content.contact.email-address}`;
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