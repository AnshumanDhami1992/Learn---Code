<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>nested loop</title>
</head>
<body>
	<script type="text/javascript">
		for(var row = 1; row<=7 ; row++){
			for(var col = 1; col<=row; col++){
				document.write("start");
				document.write("<br>");
			}
			document.write("*");
			document.write("<br>");
		}
	</script>

</body>
</html>