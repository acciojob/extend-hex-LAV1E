const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length-3,isCapital = false;
	let output = "#";
	while(i<shortHex.length){
		let asccicode = shortHex[i].charCodeAt(0);
		if(asccicode >= 65 && asccicode <= 90){
			isCapital = true;
		}
		output += shortHex[i] + shortHex[i];
	}
	return  isCapital? output.ToUpperCase:output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
