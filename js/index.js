const content = `
	{
		"content": {
		"name": {
			"first": "Evan",
			"last": "Pulgino"
		},
		"location": {
			"city": "Seattle",
			"state": "WA"
		},
		"contact": {
			"phone-number": "412-512-4723",
			"email-address": "evan.pulgino@pm.me"
		}
	}
`;

function populateDataOnLoad() {
	console.log(content);
}

populateDataOnLoad();