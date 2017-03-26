var searchButton=document.getElementById("searchButton");
var searchBar=document.getElementById("searchBar");
searchButton.addEventListener("click",function(){
		var searchValue=searchBar.value;
		var dataWebsite="https:query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+searchValue+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
		var request = new XMLHttpRequest();
		request.open('GET' , dataWebsite);
		request.send();
        console.log(request);
		request.onload = function(){
			var data = JSON.parse(request.responseText);
			render(data);
		}
	});
function render(data){
    str="<div><div><li>Temperature: "+data.query.results.channel.item.condition.temp+" "+data.query.results.channel.units.temperature+"</li><li>Last Updated at: "+data.query.results.channel.lastBuildDate+"</li><li>Location: "+data.query.results.channel.location.city+"</li><li>Country: "+data.query.results.channel.location.country+"</li><li>Region: "+data.query.results.channel.location.region+"</li><li>Wind Speed:"+data.query.results.channel.wind.speed+" "+data.query.results.channel.units.speed+"</li><li>Humidity: "+data.query.results.channel.atmosphere.humidity+"</li><li>Pressure :"+data.query.results.channel.atmosphere.pressure+data.query.results.channel.units.pressure+"</li><li>Visiblity :"+data.query.results.channel.atmosphere.visibility+"</li><li>Sunrise: "+data.query.results.channel.astronomy.sunrise+"</li><li>Sunset: "+data.query.results.channel.astronomy.sunset+"</li><li>Condition: "+data.query.results.channel.item.condition.text+"</li></div></div>"
    details.innerHTML = str;
}