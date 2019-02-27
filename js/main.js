//This variable stores the "Pick A Colour" button
const originalButton = document.getElementById('original-button');

//This variable stores the "Mystery Colour" button
const mysteryButton = document.getElementById('mystery-button');

let newBackground;

//This random number function that will create colour codes for the ramdomColour variable
function randomNum(num) {
	return Math.floor(Math.random() * num);
}

function colourChange(event) {
	const randomColour = 'rgb(' + randomNum(255) + ',' + randomNum(255) + ',' + randomNum(255) + ')';

	//Changes the background colour of the page with a random colour
	event.target.style.backgroundColor = randomColour;
	
	//Store the new background colour
	const backgroundColour = event.target.style.backgroundColor;

	//Give the input field the new background colour
	document.getElementById('colourText').value = backgroundColour;
	
}

//When button is pressed the button background colour is changed 
originalButton.onclick = colourChange;

//onwheel allows the user to scroll through colours
mysteryButton.onwheel = colourChange;

function copyColour(){
	//gets the value of the input field
	let copyColour = document.getElementById("colourText");

	/* Select the text field */
	copyColour.select();

	/* Copy the text inside the input field */
	document.execCommand("copy");

	/* Alert the copied colour */
	alert("Copied the Colour: " + copyColour.value);
}
