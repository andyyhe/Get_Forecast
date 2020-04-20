$(document).ready(function() {

	console.log("Loaded jQuery!");
	
	$("#ok").click(function() {
		console.log("Inside button click...");
		var zipCode = $("#zipcode").val();
		console.log(zipCode);
	
		$.ajax({
		
			url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=a30ebb5af6b78e566e1797db9855606e"
			
		}).then(function(data) {
			console.log(data)
			var divTag1 = document.getElementById("content1");
			divTag1.innerHTML = "City: "+ data.name;
			var divTag2 = document.getElementById("content2");
			divTag2.innerHTML = "temp_min: "+ data.main.temp_min;
			var divTag3 = document.getElementById("content3");
			divTag3.innerHTML = "temp_max: "+ data.main.temp_max;
		})
	})
	
})