import content from "./data/content.json" assert { type: 'json' };

function populateDataOnLoad() {
	console.log(content);
}

populateDataOnLoad();