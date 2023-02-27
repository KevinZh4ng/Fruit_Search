const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Searches the fruit given a string and gives an array of the possible 
function search(str) {
	let results = fruit.filter(element => element.toLowerCase().indexOf(str.toLowerCase()) != -1);
	return results;
}

//Handles every updates when a key goes back up
function searchHandler(e) {
	e.preventDefault();
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.lastChild);
	}
	showSuggestions(e.target.value);
}

//Makes the suggestions list and highlight the bolded words
function showSuggestions(inputVal) {
	search(inputVal).forEach(fruit => {
		let index = fruit.toLowerCase().indexOf(inputVal.toLowerCase()); //get the index where the letter first appears
		const suggestion = document.createElement("li");
		const stringBeforeBold = document.createElement("span");
		const bold = document.createElement("strong"); // use of strong to get the bolded words
		const stringAfterBold = document.createElement("span");
		//Text manipulation to get the bolded letters to show on the search bar
		stringBeforeBold.innerText = fruit.slice(0, index);
		bold.innerText = fruit.slice(index, index + inputVal.length);
		stringAfterBold.innerText = fruit.slice(index + inputVal.length);
		suggestion.appendChild(stringBeforeBold);
		suggestion.appendChild(bold);
		suggestion.appendChild(stringAfterBold);
		suggestions.appendChild(suggestion);

	})

}

//changes the search bar with the chosen word
function useSuggestion(e) {
	if (e.target.nodeName === "STRONG" || e.target.nodeName === "SPAN") { //makesure that it works wherever in the li element
		input.value = e.target.parentNode.innerText;
	}
	else {
		input.value = e.target.innerText;
	}

	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.lastChild);
	}

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);