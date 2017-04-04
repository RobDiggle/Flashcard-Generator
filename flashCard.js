function basicCard(front, back) 
{ 
	this.front = front;
	this.back = back;
} 

var wittgensteinOne = new basicCard("In what city was Ludwig Wittgenstein born?", "Vienna");
console.log("Question: " + wittgensteinOne.front);
console.log("Answer: " + wittgensteinOne.back);

console.log("_____________________________________________")


function clozeCard(text, cloze) 
{ 
	this.text = text;
	this.cloze = cloze;

// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.

	var clozeTextReturn = function ()
	{
		console.log("Cloze text: " + cloze);
	}

// ClozeCard should have a property or method that contains or returns only the partial text.

	var partialTextReturn = function()
	{
//Idea.....use a .split() or .replace()
	var separate = text.split(cloze);
	var letters = cloze.split("");
	console.log("Letters: " + letters);
	console.log("Quote with cloze removed: " + separate);

	document.write("Quote with cloze replaced: " + text.replace(cloze, "_________"));

	}



// ClozeCard should have a property or method that contains or returns only the full text.

	var fullTextReturn = function ()
	{
		console.log("Full text: " + text);
	}

	fullTextReturn();
	clozeTextReturn();
	partialTextReturn();

} 

var wittgensteinQuoteOne = new clozeCard("Don't get involved in partial problems, but always take flight to where there is a free view over the whole single great problem.",
 "partial problems");


console.log("_____________________________________________")



