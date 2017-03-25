var searchButton=document.getElementById("searchButton");
var searchBar=document.getElementById("searchBar");
searchButton.addEventListener("click",function(){
		var searchValue=searchBar.value;
		var dataWebsite="http://api.apixu.com/v1/current.json?key=27f4205113ea4b4ca94103008172503&q="+searchValue;
		var request = new XMLHttpRequest();
		request.open('GET' , dataWebsite);
		request.send();
		request.onload = function(){
			var data = JSON.parse(request.responseText);
			render(data);
		}
	});
function render(data){
	str="<div><div><li>Temp: " +data.current.temp_c+"</li><li>Last Updated at : "+data.current.last_updated
	+"</li><li>Place: "+data.location.name+"</li><li>Region: "+data.location.region+"</li></div></div>";
	details.innerHTML = str;	
}