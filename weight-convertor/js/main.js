// Formula for converting Kilgograms
document.getElementById('kgInput').addEventListener("input", function() {
	var kg = document.getElementById("kgInput").value;
	document.getElementById("gramsInput").value = kg * 1000;
	document.getElementById("poundsInput").value = kg * 2.2046226218488;

});

// Formula for converting Grams
document.getElementById('gramsInput').addEventListener("input", function() {
	var grams = document.getElementById("gramsInput").value;
	document.getElementById("kgInput").value = grams / 1000;
	document.getElementById("poundsInput").value = grams * 0.0022046226218488;
	
});

// Formula for converting Pounds
document.getElementById('poundsInput').addEventListener("input", function() {
	var pounds = document.getElementById("poundsInput").value;
	document.getElementById("kgInput").value = pounds * 0.45359237;
	document.getElementById("gramsInput").value = pounds * 453.59237;
		
});
