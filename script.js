var searchButton=document.getElementById("searchButton");
var searchBar=document.getElementById("searchBar");
searchButton.addEventListener("click",function(){
		var searchValue=searchBar.value;
		var dataWebsite="https://api.apixu.com/v1/current.json?key=27f4205113ea4b4ca94103008172503&q="+searchValue;
		var request = new XMLHttpRequest();
		request.open('GET' , dataWebsite);
		request.send();
		request.onload = function(){
			var data = JSON.parse(request.responseText);
			render(data);
		}
	});
function render(data){
	str="<div><div><li>Temperature: " +data.current.temp_c+" C </li><li>Last Updated at : "+data.current.last_updated
	+"</li><li>Place: "+data.location.name+"</li><li>Region: "+data.location.region+"</li><li>Country: "+data.location.country+
	"</li><li>Condition: "+data.current.condition.text+"</li><li>Wind Speed : "+data.current.wind_mph+"mph/"+
	data.current.wind_kph+"kph</li><li>Wind Degree: "+data.current.wind_degree+"</li><li>Wind Direction: "+data.current.wind_dir+
	"</li><li>Precipitation: "+data.current.precip_in+"</li><li>Humidity: "+data.current.humidity+"</li><li>Cloud: "+data.current.cloud+
	"</li></div></div>";
	details.innerHTML = str;	
}