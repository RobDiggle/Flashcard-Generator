

function basicCard(front, back) 
{ 
	this.front = front;
	this.back = back;
	var letters = back.split("");
	console.log("Letters on back: " + letters);
} 


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
	console.log("Letters in cloze: " + letters);
	console.log("Quote with cloze removed: " + separate);

	// document.write("<p> Quote with cloze replaced: " + text.replace(cloze, "_________" ));

	}



// ClozeCard should have a property or method that contains or returns only the full text.

	var fullTextReturn = function ()
	{
		console.log("Full text: " + text);
	}

	fullTextReturn();
	clozeTextReturn();
	partialTextReturn();

// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.

	// var errorMessage = function()
	// {
	// 	if()
	// 	{
	//		console.log("Error")
	// 	}
	// }

} 


var wittgensteinOne = new basicCard("In what city was Ludwig Wittgenstein born?", "Vienna");
console.log("Question: " + wittgensteinOne.front);
console.log("Answer: " + wittgensteinOne.back);

console.log("_____________________________________________")

//Make these variables into an array.

var wittgensteinQuoteOne = new clozeCard("Don't get involved in partial problems, but always take flight to where there is a free view over the whole single great problem.",
 "partial problems");

console.log("_____________________________________________")

var wittgensteinQuoteTwo = new clozeCard("It is one of the chief skills of the philosopher not to occupy himself with questions which do not concern him.",
 "do not concern him");

console.log("_____________________________________________")

var wittgensteinQuoteThree = new clozeCard("Philosophy aims at the logical clarification of thoughts. Philosophy is not a body of doctrine but an activity. A philosophical work consists essentially of elucidations. Philosophy does not result in 'philosophical propositions', but rather in the clarification of propositions. Without philosophy thoughts are, as it were, cloudy and indistinct: its task is to make them clear and to give them sharp boundaries. (4.112)",
 "not a body of doctrine but an activity");

//There ought to be a way for the user to generate there own flashcards.
$(document).ready(function(){

$('#generator').click(function()
{
	console.log("Button clicked.")
})
	var quotes= 
	[
	"Logic takes care of itself; all we have to do is to look and see how it does it.",
	"My difficulty is only an — enormous — difficulty of expression.",
	"Don't get involved in partial problems, but always take flight to where there is a free view over the whole single great problem, even if this view is still not a clear one.",
	"It is one of the chief skills of the philosopher not to occupy himself with questions which do not concern him.",
	"Certainly it is correct to say: Conscience is the voice of God.",
	"What do I know about God and the purpose of life? I know that this world exists.",

	];

	var clozeQuote =['Logic','expression','partial problems','questions which do not concern him.','Conscience','mystical','purpose of life']	]



});



