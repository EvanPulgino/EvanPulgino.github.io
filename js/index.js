function getEducationElement(education) {
	return `<div class="education">
		<div class="institution">${education.institution}</div>
		<div class="location">${education.location}</div>
		<div class="graduated">${education.graduated}</div>
		<div class="degree">${education.degree}</div>
	</div>`;
}

function getExperienceAccomplishmentElements(accomplishments) {
	let accomplishmentElements = '';
	Object.values(accomplishments).forEach(accomplishment => {
		accomplishmentElements += `<div class="accomplishment">${accomplishment}</div>`;
	});
	return accomplishmentElements;
}

function getExperienceElement(experience) {
	return `<div class="experience">
		<div class="organization">${experience.organization}</div>
		<div class="title">${experience.title}</div>
		<div class="location">${experience.location}</div>
		<div class="daterange">${experience.start} - ${experience.end}</div>
		<div class="accomplishments">${getExperienceAccomplishmentElements(experience.accomplishments)}</div>
	</div>`;
}

function getSkillElement(skill) {
	return `<div class="skill">${skill}</div>`;
}

function populateContent(content) {

	// Profile
	document.getElementById('name').textContent = `${content.name.first} ${content.name.last}`;
	document.getElementById('location').textContent = `${content.location.city}, ${content.location.state}`;
	document.getElementById('phone-number').textContent = `${content.contact.phone_number}`;
	document.getElementById('email-address').textContent = `${content.contact.email_address}`;
	document.getElementById('github-link').insertAdjacentHTML('beforeend', `
		<a href="https://github.com/${content.contact.github}" target="_blank" rel="noreferrer noopener">${content.contact.github}</a>
	`);

	// Bio
	document.getElementById('bio').textContent = `${content.bio}`;

	// Skills
	Object.values(content.skills).forEach(skill => {
		document.getElementById('skills').insertAdjacentHTML('beforeend', getSkillElement(skill));
	})

	// Experience
	Object.values(content.experience).forEach(experience => {
		document.getElementById('experience').insertAdjacentHTML('beforeend', getExperienceElement(experience));
	});

	// Education
	Object.values(content.education).forEach(education => {
		document.getElementById('education').insertAdjacentHTML('beforeend', getEducationElement(education));
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