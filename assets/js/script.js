/* -------------------------------- Variables ------------------------------- */
var city = document.getElementById("search-city").value;
var weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=34.053345&lon=-118.242349&exclude=current,minutely,hourly,alerts&appid=0255c5995a7668330428d0c738d5fc29"

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

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=34.053345&lon=-118.242349&exclude=current,minutely,hourly,alerts&appid=0255c5995a7668330428d0c738d5fc29')
    .then(response => response.json())
    .then((data)=>{
        console.log(data)
        fetchBtn.onclick = function() {
         displayCity.innerHTML = data.timezone
         displayTemp.innerHTML = data.daily[0].temp.day
         displayWind.innerHTML = data.daily[0].wind_speed
         displayHumidity.innerHTML = data.daily[0].humidity

        
         displayDayOneDate.innerHTML = data.daily[1].dt
         iconTwo.innerHTML = data.daily[1].weather[0].icon
         tempTwo.innerHTML = data.daily[1].temp.day
         windTwo.innerHTML = data.daily[1].wind_speed
         humidTwo.innerHTML = data.daily[1].humidity

         displayDayTwoDate.innerHTML = data.daily[2].dt
         iconThree.innerHTML = data.daily[2].weather[0].icon
         tempThree.innerHTML = data.daily[2].temp.day
         windThree.innerHTML = data.daily[2].wind_speed
         humidThree.innerHTML = data.daily[2].humidity

         displayDayThreeDate.innerHTML = data.daily[3].dt
         iconFour.innerHTML = data.daily[3].weather[0].icon   
         tempFour.innerHTML = data.daily[3].temp.day
         windFour.innerHTML = data.daily[3].wind_speed
         humidFour.innerHTML = data.daily[3].humidity

         displayDayFourDate.innerHTML = data.daily[4].dt
         iconFive.innerHTML = data.daily[4].weather[0].icon
         tempFive.innerHTML = data.daily[4].temp.day
         windFive.innerHTML = data.daily[4].wind_speed
         humidFive.innerHTML = data.daily[4].humidity

         displayDayFiveDate.innerHTML = data.daily[5].dt
         iconSix.innerHTML = data.daily[5].weather[0].icon
         tempSix.innerHTML = data.daily[5].temp.day
         windSix.innerHTML = data.daily[5].wind_speed
         humidSix.innerHTML = data.daily[5].humidity


        }
    });

// console.log(data)
// //  .then(function(response) {
// //     return response.json();
// }).then(function(data) {
//     console.log(data);})}
 

/* ------------------------------- Search City ------------------------------ */

 /* ---------------------------- Five Day Forecast --------------------------- */

//  displayDayOneDate.innerHTML = dayOne; 
//  $("$icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='weather icon'>");
//  displayTemp.innerHTML = ("Temp: " + data.list[0].main.temp);
//  displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);
//  displayHumidity.innerHTML = ("Humidity: " + data.list[0].main.humidity);

//  displayDayTwoDate.innerHTML = dayTwo;
//  $("$icon2").html("<img src='http://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='weather icon'>");
//  temp2.innerHTML = ("Temp: " + data.list[2].main.temp);
//  wind2.innerHTML = ("Wind: " + data.list[2].wind.speed);
//  humid2.innerHTML = ("Humidity: " + data.list[2].main.humidity);
 
//  displayDayThreeDate.innerHTML = dayThree;
//  $("$icon3").html("<img src='http://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png' alt='weather icon'>");
//  temp3.innerHTML = ("Temp: " + data.list[10].main.temp);
//  wind3.innerHTML = ("Wind: " + data.list[10].wind.speed);
//  humid3.innerHTML = ("Humidity: " + data.list[10].main.humidity);

//  displayDayFourDate.innerHTML = dayFour;
//  $("$icon4").html("<img src='http://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png' alt='weather icon'>");
//  temp4.innerHTML = ("Temp: " + data.list[18].main.temp);
//  wind4.innerHTML = ("Wind: " + data.list[18].wind.speed);
//  humid4.innerHTML = ("Humidity: " + data.list[18].main.humidity);

//  displayDayFiveDate.innerHTML = dayFive;
//  $("$icon5").html("<img src='http://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png' alt='weather icon'>");
//  temp5.innerHTML = ("Temp: " + data.list[26].main.temp);
//  wind5.innerHTML = ("Wind: " + data.list[26].wind.speed);
//  humid5.innerHTML = ("Humidity: " + data.list[26].main.humidity);

//  displayDaySixDate.innerHTML = daySix;
//  $("$icon6").html("<img src='http://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png' alt='weather icon'>");
//  temp6.innerHTML = ("Temp: " + data.list[34].main.temp);
//  wind6.innerHTML = ("Wind: " + data.list[34].wind.speed);
//  humid6.innerHTML = ("Humidity: " + data.list[34].main.humidity);
