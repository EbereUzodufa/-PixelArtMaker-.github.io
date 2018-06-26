// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(){
	event.preventDefault();
	/* Act on the event */
	//alert("aSome sizePicker") //Checking if the functoion was hit

	//TODO: Set Height x Width for Grid
	let heightTable = $('#inputHeight').val();
	let widthTable = $('#inputWeight').val();
	makeGrid(heightTable,widthTable);
});

function makeGrid(tableHeight, tableWidth) {
	//alert("aSome"); //Checking if the functoion was hit
	
	//TODO: Create Grid from Height x Width declared earlier
	const table = $('#pixelCanvas');
	table.children().remove();

	let i = 1;

	while(i<=tableHeight){
		table.prepend('<tr></tr>');

		for(j=1; j<=tableWidth; j++){
			$('tr').first().prepend('<td></td>');
		}

		i++;
	}
	

	$("td").on('click', function(event) {
		event.preventDefault();

		//TODO: Get Background-Color of Clicked <td>
		const cox = $(this).css("background-color");

		//TODO: Set <td> background-color
		if (cox.includes('rgba')===true) {
			//TODO: Check if <td> background-color is transparent
			$(this).css("background-color",$('#colorPicker').val());
		}
		else{
			//TODO: Check if Color Picker selected color is the same with <td> background-color

			let cut1 = cox.slice(4);	//Remove rgba for color code text
			let lastChar = cut1.indexOf(')');	//Get index of ')'
			let cut2 = cut1.slice(0, lastChar);	//Remove ')'
			let charSpace1 = cut2.indexOf(',');	//Get index of ',' so we can get value of red
			let r = cut2.slice(0, charSpace1);	//Get value of red
			cut2 = cut2.slice(charSpace1+2);	//Remove ', '
			let charSpace2 = cut2.indexOf(',');	//Get index of ',' so we can get value of green
			let g = cut2.slice(0, charSpace2);	//Get value of green		
			let b = cut2.slice(charSpace2+2, cut2.length);	//Get value of blue

			// alert('R=' + r);
			// alert('G=' + g);
			// alert('b=' + b);

			r=parseInt(r);	//Convert value of Red to Integer
			g=parseInt(g);	//Convert value of Green to Integer
			b=parseInt(b);	//Convert value of Blue to Integer

			//alert(r+g+b);
			//alert($('#colorPicker').val());
			//alert(parseInt(r) + parseInt(g) + parseInt(b));

			let rCode;
			let gCode;
			let bCode;

			if (r<10) {
				//TODO: Check if Red is less than 10
				rCode = "0"+r;
			}
			else if (r>10 && r<16) {
				//TODO: Check range of color. Those within this range does not need to be divided by 16
				rCode = r.toString();
			}
			else{
				let rCodeDec = r % 16;
				let rCodeInt = (r - rCodeDec)/16;
				rCode = codeHex(rCodeInt) + codeHex(rCodeDec);	//send to function codeHex that helps assign accurate value for rcode
			}

			if (g<10) {
				//TODO: Check if Green is less than 10
				gCode = "0"+r;
			}
			else if (g>10 && g<16) {
				//TODO: Check range of color. Those within this range does not need to be divided by 16
				gCode = g.toString();
			}
			else{
				let gCodeDec = g % 16;
				let gCodeInt = (g - gCodeDec)/16;
				gCode = codeHex(gCodeInt) + codeHex(gCodeDec);	//send to function codeHex that helps assign accurate value for rcode
			}

			if (b<10) {
				//TODO: Check if Blue is less than 10
				bCode = "0"+b;
			}
			else if (b>10 && b<16) {
				//TODO: Check range of color. Those within this range does not need to be divided by 16
				bCode = b.toString();
			}
			else{
				let bCodeDec = b % 16;
				let bCodeInt = (b - bCodeDec)/16;
				bCode = codeHex(bCodeInt) + codeHex(bCodeDec);	//sent to function codeHex that helps assign accurate value for rcode
			}

			// alert("rCode= " + rCode);
			// alert("gCode= " + gCode);
			// alert("bCode= " + bCode);

			//alert("Color Picker= "+ $('#colorPicker').val() + "\nColor Code= #"+rCode + gCode + bCode);

			let ColorPicker = $('#colorPicker').val();
			let colorCode = "#"+rCode + gCode + bCode;

			//alert("Color Picker= "+ ColorPicker + "\nColor Code= " + colorCode);

			if (ColorPicker === colorCode) {
				//alert("Same");
				$(this).css("background-color",'transparent');
			}
			else{
				//alert("Not Same");
				$(this).css("background-color",$('#colorPicker').val());
			}

		}

		//TODO: Convert RGB Color code to #Hex
		function codeHex(hexa){
			if (hexa==10) {
				return "a";
			}
			else if (hexa==11) {
				return "b";
			}
			else if (hexa==12) {
				return "c";
			}
			else if (hexa==13) {
				return "d";
			}
			else if (hexa==14) {
				return "e";
			}
			else if (hexa==15) {
				return "f";
			}
			else{
				return hexa.toString();
			}
		}

	});

}
