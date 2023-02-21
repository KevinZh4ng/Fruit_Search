const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//Searches the fruit given a string and gives an array of the possible 
function search(str) {
	let results = fruit.filter(element =>{
		if(element.toLowerCase().indexOf(str.toLowerCase()) != -1){
			return element
		}
	});
	return results;
}

//Handles every updates when a key goes back up
function searchHandler(e) {
	e.preventDefault();
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.lastChild);
	}
	showSuggestions(e.target.value);
}

//Makes the suggestions list and highlight the bolded words
function showSuggestions(inputVal) {
	let fruits = search(inputVal);
	fruits.forEach(element =>{
		let index = element.toLowerCase().indexOf(inputVal.toLowerCase()); //get the index where the letter first appears
		const suggestion = document.createElement("li");
		const first = document.createElement("span");
		const strong = document.createElement("strong"); // use of strong to get the bolded words
		const second = document.createElement("span");
		//Text manipulation to get the bolded letters to show on the search bar
		first.innerText = element.slice(0,index);
		strong.innerText = element.slice(index, index+inputVal.length);
		second.innerText = element.slice(index+inputVal.length);
		suggestion.appendChild(first);
		suggestion.appendChild(strong);
		suggestion.appendChild(second);
		suggestions.appendChild(suggestion);

	})
	
}

//changes the search bar with the cosen word
function useSuggestion(e) {
	if(e.target.nodeName === "STRONG" || e.target.nodeName === "SPAN"){ //makesure that it works wherever in the li element
		input.value = e.target.parentNode.innerText;
	} 
	else{
		input.value = e.target.innerText;
	}

	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.lastChild);
	}

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);