//https://www.rijksmuseum.nl/api/pages/en/explore-the-collection/overview/rembrandt-harmensz-van-rijn?key=Yxjn0jmX&format=json

$('form').submit(function(event){
	event.preventDefault()
	//turns user input into array
	var input = $(this).serializeArray()[0].value
	//convert input to 
	input = input.toLowerCase().split(' ').join('-');
	console.log(input);

	var source = 'https://www.rijksmuseum.nl/api/pages/en/explore-the-collection/overview/'
	var tail = '?key=Yxjn0jmX&format=json'


	
	function displayImages(data){
		var allImages = data.contentPage.artObjectSet
		var source = 'https://www.rijksmuseum.nl/api/en/collection/'
		console.log(allImages);
		for(var i = 0; i < allImages.length; i++){
			$.ajax({
				url: source + allImages[i] + tail,
				success: function(img){
					console.log(img);
					var paintings = $(document.createElement('li'))
					paintings.html(img);
					$('ul').append(paintings);
				}
			})
		}
	}
	
	$.ajax({
		url: source + input + tail,
		success: displayImages
		//don't need to call the function displayImages() just put the name of the function
		})
})
