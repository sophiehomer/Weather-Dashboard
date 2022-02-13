/* -------------------------------- VARIABLES ------------------------------- */
var apiKey = "0255c5995a7668330428d0c738d5fc29";
var fetchBtn = document.getElementById("fetch-button");

var displayCity = document.getElementById("city");
var displayTemp = document.getElementById("temp");
var displayWind = document.getElementById("wind");
var displayHumidity = document.getElementById("humidity");

var dayOne = moment().format("MM/DD/YYYY")
var dayTwo = moment().add(1, 'days').format("MM/DD/YYYY")
var dayThree = moment().add(2, 'days').format("MM/DD/YYYY")
var dayFour = moment().add(3, 'days').format("MM/DD/YYYY")
var dayFive = moment().add(4, 'days').format("MM/DD/YYYY")
var daySix = moment().add(5, 'days').format("MM/DD/YYYY")

var displayDayOneDate = document.getElementById("dayOneDate");
var displayDayTwoDate = document.getElementById("dayTwoDate")
var displayDayThreeDate = document.getElementById("dayThreeDate");
var displayDayFourDate = document.getElementById("dayFourDate");
var displayDayFiveDate = document.getElementById("dayFiveDate");
var displayDaySixDate = document.getElementById("daySixDate");

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

var humidityTwo = document.getElementById("humidityTwo")
var humidityThree = document.getElementById("humidityThree")
var humidityFour = document.getElementById("humidityFour")
var humidityFive = document.getElementById("humidityFive")
var humiditySix= document.getElementById("humiditySix")
/* -------------------------------- FETCH API ------------------------------- */

$('#fetch-button').on('click', function() {
  
   var city = $('#enter-city').val(); 
 
   var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=0255c5995a7668330428d0c738d5fc29';
   
   searchWeather(requestUrl);
 });
 
 $('.fav').on('click', function() {
   var city = $(this).text();
   var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=0255c5995a7668330428d0c738d5fc29';
   searchWeather(requestUrl);
 
 });
 
 function searchWeather(requestUrl) {
   
 fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {  
   console.log(data);
  /* ---------------------------- CURRENT CITY TEMP SET ITEM --------------------------- */
   displayCity.innerHTML = (data.city.name);
   displayHumidity.innerHTML = ("Humidity: " + data.list[0].main.humidity);
   displayTemp.innerHTML = ("Temp: " + data.list[0].main.temp + "°F");
   displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);
   $("#iconOne").html("<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   displayDayOneDate.innerHTML = dayOne;
  
   localStorage.setItem("city1", data.city.name); 
   localStorage.setItem("humidityOne", data.list[0].main.humidity); 
   localStorage.setItem("tempOne", data.list[0].main.temp + "°F");
   localStorage.setItem("windOne", data.list[0].wind.speed); 
   localStorage.setItem("date1", dayOne);
   localStorage.setItem("iconOne", "<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png>") //set to local storage
 
   console.log(data.city.name)  

  /* ---------------------------------- DAY 2 SET ITEM --------------------------------- */
   displayDayTwoDate.innerHTML = dayTwo;
   $("#iconTwo").html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   tempTwo.innerHTML= ("Temp: " + data.list[2].main.temp + "°F");
   windTwo.innerHTML= ("Wind: " + data.list[2].wind.speed);
   humidityTwo.innerHTML= ("Humidity: " + data.list[2].main.humidity);

   localStorage.setItem("humidityTwo", data.list[2].main.humidity); 
   localStorage.setItem("tempTwo", data.list[2].main.temp+"°F"); 
   localStorage.setItem("windTwo", data.list[2].wind.speed); 
   localStorage.setItem("date2", dayTwo); 
   localStorage.setItem("iconTwo", "<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 3 SET ITEM --------------------------------- */
   displayDayThreeDate.innerHTML = dayThree;
   $("#iconThree").html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   tempThree.innerHTML= ("Temp: " + data.list[10].main.temp + "°F");
   windThree.innerHTML= ("Wind: " + data.list[10].wind.speed);
   humidityThree.innerHTML= ("Humidity: " + data.list[10].main.humidity);

   localStorage.setItem("humidityThree", data.list[10].main.humidity);
   localStorage.setItem("tempThree", data.list[10].main.temp);
   localStorage.setItem("windThree", data.list[10].wind.speed);
   localStorage.setItem("date3", dayThree);
   localStorage.setItem("iconThree", "<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 4 SET ITEM --------------------------------- */
  displayDayFourDate.innerHTML = dayFour;
   $("#iconFour").html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   tempFour.innerHTML= ("Temp: " + data.list[18].main.temp + "°F");
   windFour.innerHTML= ("Wind: " + data.list[18].wind.speed);
   humidityFour.innerHTML= ("Humidity: " + data.list[18].main.humidity);
 
   localStorage.setItem("humidityFour", data.list[18].main.humidity);
   localStorage.setItem("tempFour", data.list[18].main.temp);
   localStorage.setItem("windFour", data.list[18].wind.speed);
   localStorage.setItem("date4", dayFour);
   localStorage.setItem("iconFour", "<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 5 SET ITEM --------------------------------- */
   displayDayFiveDate.innerHTML = dayFive;
   $("#iconFive").html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   tempFive.innerHTML= ("Temp: " + data.list[26].main.temp + "°F");
   windFive.innerHTML= ("Wind: " + data.list[26].wind.speed);
   humidityFive.innerHTML= ("Humidity: " + data.list[26].main.humidity);
 
   localStorage.setItem("humidityFive", data.list[26].main.humidity); 
   localStorage.setItem("tempFive", data.list[26].main.temp+ "°F"); 
   localStorage.setItem("windFive", data.list[26].wind.speed); 
   localStorage.setItem("date5", dayFive); 
   localStorage.setItem("iconFive", "<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png>") 

  /* ---------------------------------- DAY 6 SET ITEM --------------------------------- */
   displayDaySixDate.innerHTML = daySix;
   $("#iconSix").html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   tempSix.innerHTML= ("Temp: " + data.list[34].main.temp + "°F");
   windSix.innerHTML= ("Wind: " + data.list[34].wind.speed);
   humiditySix.innerHTML= ("Humidity: " + data.list[34].main.humidity);
 
   localStorage.setItem("humiditySix", data.list[34].main.humidity); 
   localStorage.setItem("tempSix", data.list[34].main.temp); 
   localStorage.setItem("windSix", data.list[34].wind.speed); 
   localStorage.setItem("date6", daySix); 
   localStorage.setItem("iconSix", "<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png>")
 });}
 
 function getVal() {
  /* ---------------------------------- DAY 1 GET ITEM --------------------------------- */
   var cityDisplay = localStorage.getItem("city1");
   displayCity.innerHTML = cityDisplay;
 
   var displayHumidityOne = localStorage.getItem("humidityOne");
   displayHumidity.innerHTML = "Humidty: " + displayHumidityOne;
 
   var displayTempOne = localStorage.getItem("tempOne");
   displayTemp.innerHTML = "Temp: " + displayTempOne;
 
   var displayWindOne = localStorage.getItem("windOne");
   displayWind.innerHTML = "Wind: " + displayWindOne;
 
   var displayIconOne = localStorage.getItem("iconOne");
   $("#iconOne").html(displayIconOne);
 
   var displayDayOne = localStorage.getItem("dateOne");
   displayDayOneDate.innerHTML = displayDayOne;
 
  /* ---------------------------------- DAY 2 GET ITEM --------------------------------- */
   var displayHumidityTwo = localStorage.getItem("humidityTwo");
   humidityTwo.innerHTML = "Humidty: " + displayHumidityTwo;
 
   var displayTempTwo = localStorage.getItem("tempTwo");
   tempTwo.innerHTML = "Temp: " + displayTempTwo;
 
   var displayWindTwo = localStorage.getItem("windTwo");
   windTwo.innerHTML = "Wind: " + displayWindTwo;
 
   var displayIconTwo = localStorage.getItem("iconTwo");
   $("#iconTwo").html(displayIconTwo);
 
   var displayDayTwo = localStorage.getItem("dateTwo");
   displayDayTwoDate.innerHTML = displayDayTwo;
 
  /* ---------------------------------- DAY 3 GET ITEM --------------------------------- */
   var displayHumidityThree = localStorage.getItem("humidityThree");
   humidityThree.innerHTML = "Humidty: " + displayHumidityThree;
 
   var displayTempThree = localStorage.getItem("tempThree");
   tempThree.innerHTML = "Temp: " + displayTempThree;
 
   var displayWindThree = localStorage.getItem("windThree");
   windThree.innerHTML = "Wind: " + displayWindThree;
 
   var displayIconThree = localStorage.getItem("iconThree");
   $("#iconThree").html(displayIconThree);
 
   var displayDayThree = localStorage.getItem("dateThree");
   displayDayThreeDate.innerHTML = displayDayThree;
 
  /* ---------------------------------- DAY 4 GET ITEM --------------------------------- */
   var displayHumidityFour = localStorage.getItem("humidityFour");
   humidityFour.innerHTML = "Humidty: " + displayHumidityFour;
 
   var displayTempFour = localStorage.getItem("tempFour");
   tempFour.innerHTML = "Temp: " + displayTempFour;
 
   var displayWindFour = localStorage.getItem("windFour");
   windFour.innerHTML = "Wind: " + displayWindFour;
 
   var displayIconFour = localStorage.getItem("iconFour");
   $("#iconFour").html(displayIconFour);
 
   var displayDayFour = localStorage.getItem("dateFour");
   displayDayFourDate.innerHTML = displayDayFour;
 
  /* ---------------------------------- DAY 5 GET ITEM --------------------------------- */
   var displayHumidityFive = localStorage.getItem("humidityFive");
   humidityFive.innerHTML = "Humidty: " + displayHumidityFive;
 
   var displayTempFive = localStorage.getItem("tempFive");
   tempFive.innerHTML = "Temp: " + displayTempFive;
 
   var displayWindFive = localStorage.getItem("windFive");
   windFive.innerHTML = "Wind: " + displayWindFive;
 
   var displayIconFive = localStorage.getItem("iconFive");
   $("#iconFive").html(displayIconFive);
 
   var displayDayFive = localStorage.getItem("dateFive");
   displayDayFiveDate.innerHTML = displayDayFive;
 
  /* ---------------------------------- DAY 6 GET ITEM --------------------------------- */
   var displayHumiditySix = localStorage.getItem("humiditySix");
   humiditySix.innerHTML = "Humidty: " + displayHumiditySix;
 
   var displayTempSix = localStorage.getItem("tempSix");
   tempSix.innerHTML = "Temp: " + displayTempSix;
 
   var displayWindSix = localStorage.getItem("windSix");
   windSix.innerHTML = "Wind: " + displayWindSix;
 
   var displayIconSix = localStorage.getItem("iconSix");
   $("#iconSix").html(displayIconSix);
 
   var displayDaySix = localStorage.getItem("dateSix");
   displayDaySixDate.innerHTML = displayDaySix;
 }

 getVal();