<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>switch</title>
</head>
<body>
<script type="text/javascript">
	 const day = prompt("Enter any number");

	switch (parseInt(day)){
	case 1: document.write('<h1>Sunday</h1>'); break;
	case 2: document.write('<h1>Monday</h1>'); break;
	case 3: document.write('<h1>Teusday</h1>'); break;
	case 4: document.write('<h1>Wedensda</h1>'); break;
	case 5: document.write('<h1>Thursday</h1>'); break;
	case 6: document.write('<h1>Friday</h1>'); break;
	case 7: document.write('<h1>Saturday</h1>'); break;

	default: document.write("<h1>Error</h1>");break;
	
	}	
</script>
</body>
</html>