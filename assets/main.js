fonts = [
{
	family:"Roboto",
	description:"Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesks distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.",
	sizes: {
		"100": "Thin",
		"100i": "Thin Italic",
		"300": "Light",
		"300i": "Light Italic",
		"400": "Regular",
		"400i": "Regular Italic",
		"500": "Medium",
		"500i": "Medium Italic",
		"600": "Semi Bold",
		"600i": "Semi Bold Italic",
		"700": "Bold",
		"700i": "Bold Italic",
		"900": "Black",
		"900i": "Black Italic"
	},
	numlist: [
		"100",
		"100i",
		"300",
		"300i",
		"400",
		"400i",
		"500",
		"500i",
		"600",
		"600i",
		"700",
		"700i",
		"900",
		"900i"
	]
},{
	family:"Raleway",
	description:"Raleway is an elegant sans-serif typeface family intended for headings and other large size usage. Initially designed by Matt McInerney as a single thin weight, it was expanded into a 9 weight family by Pablo Impallari and Rodrigo Fuenzalida in 2012 and iKerned by Igino Marini.",
	sizes: {
		"100": "Thin",
		"100i": "Thin Italic",
		"200": "Extra Light",
		"200i": "Extra Light Italic",
		"300": "Light",
		"300i": "Light Italic",
		"400": "Regular",
		"400i": "Regular Italic",
		"500": "Medium",
		"500i": "Medium Italic",
		"600": "Semi Bold",
		"600i": "Semi Bold Italic",
		"700": "Bold",
		"700i": "Bold Italic",
		"800": "Extra Bold",
		"800i": "Extra Bold Italic",
		"900": "Black",
		"900i": "Black Italic"
	},
	numlist: [
		"100",
		"100i",
		"200",
		"200i",
		"300",
		"300i",
		"400",
		"400i",
		"500",
		"500i",
		"600",
		"600i",
		"700",
		"700i",
		"800",
		"800i",
		"900",
		"900i"
	]
},{
	family:"Comfortaa",
	description:"Comfortaa is a rounded geometric sans-serif type design intended for large sizes. It is absolutely free, both for personal and commercial use.",
	sizes: {
		"300": "Light",
		"400": "Regular",
		"700": "Bold"
	},
	numlist: [
		"300",
		"400",
		"700"
	]
}
];
searchResults = [];
var recommended = [];
recommended[0] = fonts[0];

function getResults(){
	searchResults = [];
	search = document.querySelector(".search-bar").value.toLowerCase();
	if(search != ""){
		for (var i = fonts.length - 1; i >= 0; i--) {
			if(search == fonts[i]["family"].toLowerCase() || search == fonts[i]["family"].toLowerCase().substr(0,search.length)){
				searchResults.push(fonts[i]);
			}
		};

		$("#main div.cards").empty();
		if(searchResults != []){
			showResults();
		}
	} else {		
		$("#main div.cards").empty();
	}
}

function showResults(){
	$("#main div.cards").empty();
	for (var j = searchResults.length - 1; j >= 0; j--) {
		result = searchResults[j];
		name = result.family;
		info = result["description"];

		$("#main div.cards").append("<div class=\"row\"><div class=\"col s12 m6\"><div class=\"card blue-grey darken-1\"><div class=\"card-content white-text\"><span class=\"card-title\">"+name+"</span><p>"+info+"</p></div><div class=\"card-action\"><a href=\"font.html?family="+name+"\">Preview</a><a href=\"#\">Download</a></div></div></div></div>");
	};
}

function showRecommended(){
	for (var j = recommended.length - 1; j >= 0; j--) {
		result = recommended[j];
		name = result.family;
		info = result["description"];

		$("#recommended").append("<div class=\"row\"><div class=\"col s12 m6\"><div class=\"card blue-grey darken-1\"><div class=\"card-content white-text\"><span class=\"card-title\">"+name+"</span><p>"+info+"</p></div><div class=\"card-action\"><a href=\"font.html?family="+name+"\">Preview</a><a href=\"#\">Download</a></div></div></div></div>");
	};	
}

$(document).ready(function(){
	showRecommended();
});