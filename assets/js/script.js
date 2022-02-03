/* -------------------------------- Variables ------------------------------- */
var city;
var lat = 34.053345;
var lon = -118.242349;
var apiKey = "0255c5995a7668330428d0c738d5fc29";
var weatherUrl = `https://api.openweathermap.org`

var fetchBtn = document.getElementById("fetch-btn")

var displayCity = document.getElementById("city");
var displayTemp = document.getElementById("temp");
var displayWind = document.getElementById("wind");
var displayHumidity = document.getElementById("humid");

var displayDayOneDate = document.getElementById("dayOneDate");
var displayDayTwoDate = document.getElementById("dayTwoDate")
var displayDayThreeDate = document.getElementById("dayThreeDate");
var displayDayFourDate = document.getElementById("dayFourDate");
var displayDayFiveDate = document.getElementById("dayFiveDate");
var displayDaySixDate = document.getElementById("daySixDate");

var iconTwo = document.getElementById("iconTwo")
var iconThree = document.getElementById("iconThree")
var iconFour = document.getElementById("iconFour")
var iconFive = document.getElementById("iconFive")
var iconSix = document.getElementById("iconSix")

var tempTwo = document.getElementById("tempTwo")
var tempThree = document.getElementById("tempThree")
var tempFour = document.getElementById("tempFour")
var tempFive = document.getElementById("tempFive")
var tempSix = document.getElementById("tempSix")

var windTwo = document.getElementById("windTwo")
var windThree = document.getElementById("windThree")
var windFour = document.getElementById("windFour")
var windFive = document.getElementById("windFive")
var windSix = document.getElementById("windSix")

var humidTwo = document.getElementById("humidTwo")
var humidThree = document.getElementById("humidThree")
var humidFour = document.getElementById("humidFour")
var humidFive = document.getElementById("humidFive")
var humidSix = document.getElementById("humidSix")
/* -------------------------------- Fetch Api ------------------------------- */

function search(){
 city = document.getElementById("search-city").value
 console.log(city)
 fetch(`${weatherUrl}/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
 .then(response => response.json())
 .then((data)=>{
    displayCity.innerHTML = data.name
    displayTemp.innerHTML = data.main.temp
    displayWind.innerHTML = data.wind.speed
    displayHumidity.innerHTML = data.main.humidity
     console.log(data)
})

// Create another fetch call for 5 day forecast
fetch(`${weatherUrl}/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
 .then(response => response.json())
 .then((data)=>{
    tempTwo.innerHTML = data.list[1].main.temp
    windTwo.innerHTML = data.list[1].wind.speed
    humidTwo.innerHTML = data.list[1].main.humidity 
    
    tempThree.innerHTML = data.list[2].main.temp
    windThree.innerHTML = data.list[2].wind.speed
    humidThree.innerHTML = data.list[2].main.humidity


    tempFour.innerHTML = data.list[3].main.temp
    windFour.innerHTML = data.list[3].wind.speed
    humidFour.innerHTML = data.list[3].main.humidity

    tempFive.innerHTML = data.list[4].main.temp
    windFive.innerHTML = data.list[4].wind.speed
    humidFive.innerHTML = data.list[4].main.humidity

    tempSix.innerHTML = data.list[5].main.temp
    windSix.innerHTML = data.list[5].wind.speed
    humidSix.innerHTML = data.list[5].main.humidity


     console.log(data)
})
//

}
fetchBtn.addEventListener("click", search)

//  $("$icon3").html("<img src='http://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png' alt='weather icon'>");
