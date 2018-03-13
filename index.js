var katzDeliLine = [];
var noLine = "There is nobody waiting to be served!";

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var place = katzDeliLine.length;
  var welcome = "Welcome, " + name + ". You are number " + place + " in line.";
  return welcome;
}

<<<<<<< HEAD
function nowServing(katzDeliLine) {
=======
function nowServing() {
>>>>>>> d2122930be2951f44e97848c7a9ed7200b1afcbd
  var place = katzDeliLine.length;
  if (place > 0) {
    var serving = katzDeliLine.slice(0,1);
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  } else {
    return noLine;
  }
}

<<<<<<< HEAD
function currentLine(katz) {
	var line = "The line is currently: 1. " + katz.slice(0,1);
	if (katz.length === 1) {
		return line;
    } else if (katz.length > 1) {
		for (var c = 1; c < katz.length; c++) {
			line = line + ", " + (c+1) + ". " + katz.slice(c, c+1);
        }
		return line;
    } else {
		return "The line is currently empty."
    }
=======
function currentLine() {
  
>>>>>>> d2122930be2951f44e97848c7a9ed7200b1afcbd
}