function getSkillElement(skill) {
	return `<div class="skill">${skill}</div>`;
}

function populateContent(content) {
	// Profile
	document.getElementById('name').textContent = `${content.name.first} ${content.name.last}`;
	document.getElementById('location').textContent = `${content.location.city}, ${content.location.state}`;
	document.getElementById('phone-number').textContent = `${content.contact.phone_number}`;
	document.getElementById('email-address').textContent = `${content.contact.email_address}`;

	// Bio
	document.getElementById('bio').textContent = `${content.bio}`;

	// Skills
	Object.values(content.skills).forEach(skill => {
		document.getElementById('skills').insertAdjacentHtml('beforeend', getSkillElement(skill));
	})
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