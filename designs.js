// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('#inputButton').on('click',function makeGrid() {
	//alert("aSome");
	const tableHeight = $('#inputHeight').val();
	const tableWidth = $('#inputWeight').val();
	const table = $('#pixelCanvas');
	table.children().remove();

	var i = 1;

	while(i<=tableHeight){
		table.prepend('<tr></tr>');

		for(j=1; j<=tableWidth; j++){
			$('tr').first().prepend('<td></td>');
		}

		i++;
	}

	$('#inputHeight').text(tableHeight)
	$('#inputWeight').text(tableWidth);


	

	$("td").on('click', function(event) {
		event.preventDefault();

		var cox = $(this).css("background-color");

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

		if (cox.includes('rgba')===true) {
			$(this).css("background-color",$('#colorPicker').val());
		}
		else{
			var cut1 = cox.slice(4);
			//cut1 = cut1.slice(1);
			var lastChar = cut1.indexOf(')');
			//alert(cut1);
			//alert(lastChar);
			var cut2 = cut1.slice(0, lastChar);
			//alert(cut2);
			var charSpace1 = cut2.indexOf(',');
			//alert(charSpace1);
			var r = cut2.slice(0, charSpace1);
			cut2 = cut2.slice(charSpace1+2);
			//alert(cut2);
			var charSpace2 = cut2.indexOf(',');
			//alert(charSpace2);
			var g = cut2.slice(0, charSpace2);		
			var b = cut2.slice(charSpace2+2, cut2.length);

			// alert('R=' + r);
			// alert('G=' + g);
			// alert('b=' + b);
			r=parseInt(r);
			g=parseInt(g);
			b=parseInt(b);
			//alert(r+g+b);
			//alert($('#colorPicker').val());
			//alert(parseInt(r) + parseInt(g) + parseInt(b));

			var rCode;
			var gCode;
			var bCode;

			if (r<10) {
				rCode = "0"+r;
			}
			else if (r>10 && r<16) {
				rCode = r.toString();
			}
			else{
				var rCodeDec = r % 16;
				var rCodeInt = (r - rCodeDec)/16;
				rCode = codeHex(rCodeInt) + codeHex(rCodeDec);
			}

			if (g<10) {
				gCode = "0"+r;
			}
			else if (g>10 && g<16) {
				gCode = g.toString();
			}
			else{
				var gCodeDec = g % 16;
				var gCodeInt = (g - gCodeDec)/16;
				gCode = codeHex(gCodeInt) + codeHex(gCodeDec);
			}

			if (b<10) {
				bCode = "0"+b;
			}
			else if (b>10 && b<16) {
				bCode = b.toString();
			}
			else{
				var bCodeDec = b % 16;
				var bCodeInt = (b - bCodeDec)/16;
				bCode = codeHex(bCodeInt) + codeHex(bCodeDec);
			}

			// alert("rCode= " + rCode);
			// alert("gCode= " + gCode);
			// alert("bCode= " + bCode);

			//alert("Color Picker= "+ $('#colorPicker').val() + "\nColor Code= #"+rCode + gCode + bCode);

			var ColorPicker = $('#colorPicker').val();
			var colorCode = "#"+rCode + gCode + bCode;

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
	});

});
