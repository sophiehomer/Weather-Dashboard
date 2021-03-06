/* -------------------------------- VARIABLES ------------------------------- */
var apiKey = "0255c5995a7668330428d0c738d5fc29";
var fetchBtn = document.getElementById("fetch-button");
/* ---------------------------------- DAYS --------------------------------- */
var displayFirstDate = document.getElementById("firstDate");
var displaySecondDate = document.getElementById("secondDate")
var displayThirdDate = document.getElementById("thirdDate");
var displayFourthDate = document.getElementById("fourthDate");
var displayFifthDate = document.getElementById("fifthDate");
console.log("line 10", displayFifthDate);
var displaySixthDate = document.getElementById("sixthDate");
console.log("line 12", displaySixthDate);

/* ---------------------------------- DATES --------------------------------- */
var dayOne = moment().format("MM/DD/YYYY")
var dayTwo = moment().add(1, 'days').format("MM/DD/YYYY")
var dayThree = moment().add(2, 'days').format("MM/DD/YYYY")
var dayFour = moment().add(3, 'days').format("MM/DD/YYYY")
var dayFive = moment().add(4, 'days').format("MM/DD/YYYY")
console.log(dayFive, "line 20")
var daySix = moment().add(5, 'days').format("MM/DD/YYYY")
/* --------------------------------- DAY ONE CITY/TEMP/WIND/HUMIDITY -------------------------------- */
var displayCity = document.getElementById("city");
var displayTemp = document.getElementById("temp");
var displayWind = document.getElementById("wind");
var displayHumidity = document.getElementById("humidity");
/* --------------------------------- TEMP -------------------------------- */
var tempTwo = document.getElementById("tempTwo")
var tempThree = document.getElementById("tempThree")
var tempFour = document.getElementById("tempFour")
var tempFive = document.getElementById("tempFive")
var tempSix = document.getElementById("tempSix")
/* -------------------------------- WIND ------------------------------- */
var windTwo = document.getElementById("windTwo")
var windThree = document.getElementById("windThree")
var windFour = document.getElementById("windFour")
var windFive = document.getElementById("windFive")
var windSix = document.getElementById("windSix")
/* -------------------------------- HUMIDITY -------------------------------- */
var humidityTwo = document.getElementById("humidityTwo")
var humidityThree = document.getElementById("humidityThree")
var humidityFour = document.getElementById("humidityFour")
var humidityFive = document.getElementById("humidityFive")
var humiditySix= document.getElementById("humiditySix")

/* -------------------------------- FETCH API ------------------------------- */
$('#fetch-button').on('click', function() {
  
   var city = $('#enter-city').val(); 
 
   var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=a059151d000029215400bdaa7965fbc2';
   searchWeather(requestUrl);
 });
 
 $('.fav').on('click', function() {
   var city = $(this).text();
   var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=a059151d000029215400bdaa7965fbc2';
   searchWeather(requestUrl);
 });
 
 function searchWeather(requestUrl) {
  fetch(requestUrl)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {  

  /* ---------------------------- CURRENT CITY TEMP SET ITEM --------------------------- */

   displayCity.innerHTML = (data.city.name);
   displayFirstDate.innerHTML = dayOne;
   displayTemp.innerHTML = (data.list[0].main.temp + "??F");
   displayWind.innerHTML = (data.list[0].wind.speed + "mph");
   displayHumidity.innerHTML = (data.list[0].main.humidity + "%");
   $("#iconOne").html("<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

   localStorage.setItem("city1", data.city.name); 
   localStorage.setItem("dateOne", dayOne);
   localStorage.setItem("tempOne", data.list[0].main.temp + "??F");
   localStorage.setItem("windOne", data.list[0].wind.speed + "mph"); 
   localStorage.setItem("humidityOne", data.list[0].main.humidity + "%"); 
   localStorage.setItem("iconOne", "<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 2 SET ITEM --------------------------------- */

   displaySecondDate.innerHTML = dayTwo;
   tempTwo.innerHTML= (data.list[2].main.temp + "??F");
   windTwo.innerHTML= (data.list[2].wind.speed + "mph");
   humidityTwo.innerHTML= (data.list[2].main.humidity + "%");
   $("#iconTwo").html("<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

   localStorage.setItem("dateTwo", dayTwo);
   localStorage.setItem("tempTwo", data.list[2].main.temp+"??F"); 
   localStorage.setItem("windTwo", data.list[2].wind.speed); 
   localStorage.setItem("humidityTwo", data.list[2].main.humidity); 
   localStorage.setItem("iconTwo", "<img src='https://openweathermap.org/img/w/" + data.list[2].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 3 SET ITEM --------------------------------- */

   displayThirdDate.innerHTML = dayThree;
   tempThree.innerHTML= (data.list[10].main.temp + "??F");
   windThree.innerHTML= (data.list[10].wind.speed + "mph");
   humidityThree.innerHTML= (data.list[10].main.humidity + "%");
   $("#iconThree").html("<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   
   localStorage.setItem("dateThree", dayThree);
   localStorage.setItem("tempThree", data.list[10].main.temp);
   localStorage.setItem("windThree", data.list[10].wind.speed);
   localStorage.setItem("humidityThree", data.list[10].main.humidity);
   localStorage.setItem("iconThree", "<img src='https://openweathermap.org/img/w/" + data.list[10].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 4 SET ITEM --------------------------------- */

   displayFourthDate.innerHTML = dayFour;
   tempFour.innerHTML= (data.list[18].main.temp + "??F");
   windFour.innerHTML= (data.list[18].wind.speed + "mph");
   humidityFour.innerHTML= (data.list[18].main.humidity + "%");
   $("#iconFour").html("<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

   localStorage.setItem("dateFour", dayFour);
   localStorage.setItem("tempFour", data.list[18].main.temp);
   localStorage.setItem("windFour", data.list[18].wind.speed);
   localStorage.setItem("humidityFour", data.list[18].main.humidity);
   localStorage.setItem("iconFour", "<img src='https://openweathermap.org/img/w/" + data.list[18].weather[0].icon + ".png>")

  /* ---------------------------------- DAY 5 SET ITEM --------------------------------- */
  console.log("line 129", displayFifthDate)
   displayFifthDate.innerHTML = dayFive;
   tempFive.innerHTML= (data.list[26].main.temp + "??F");
   windFive.innerHTML= (data.list[26].wind.speed + "mph");
   humidityFive.innerHTML= (data.list[26].main.humidity + "%");
   $("#iconFive").html("<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png' alt='Icon depicting current weather.'>");

   localStorage.setItem("datefive", dayFive); 
   localStorage.setItem("tempFive", data.list[26].main.temp+ "??F"); 
   localStorage.setItem("windFive", data.list[26].wind.speed); 
   localStorage.setItem("humidityFive", data.list[26].main.humidity); 
   localStorage.setItem("iconFive", "<img src='https://openweathermap.org/img/w/" + data.list[26].weather[0].icon + ".png>") 

  /* ---------------------------------- DAY 6 SET ITEM --------------------------------- */

   displaySixthDate.innerHTML = daySix;
   console.log("line 143", displaySixthDate);

   $("#iconSix").html("<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
   tempSix.innerHTML= (data.list[34].main.temp + "??F");
   windSix.innerHTML= (data.list[34].wind.speed + "mph");
   humiditySix.innerHTML= (data.list[34].main.humidity + "%");

   localStorage.setItem("dateSix", daySix); 
   localStorage.setItem("tempSix", data.list[34].main.temp); 
   localStorage.setItem("windSix", data.list[34].wind.speed); 
   localStorage.setItem("humiditySix", data.list[34].main.humidity); 
   localStorage.setItem("iconSix", "<img src='https://openweathermap.org/img/w/" + data.list[34].weather[0].icon + ".png>")
 });}
 
 function getVal() {
  /* ---------------------------------- DAY 1 GET ITEM --------------------------------- */

   var cityDisplay = localStorage.getItem("city1");
   console.log(displayCity);
   displayCity.innerHTML = cityDisplay;

   var displayDayOne = localStorage.getItem("dateOne");
   displayFirstDate.innerHTML = displayDayOne;

   var displayTempOne = localStorage.getItem("tempOne");
   displayTemp.innerHTML = displayTempOne;

   var displayWindOne = localStorage.getItem("windOne");
   displayWind.innerHTML = displayWindOne;
 
   var displayHumidityOne = localStorage.getItem("humidityOne");
   displayHumidity.innerHTML = displayHumidityOne;
 
   var displayIconOne = localStorage.getItem("iconOne");
   $("#iconOne").html(displayIconOne);

  /* ---------------------------------- DAY 2 GET ITEM --------------------------------- */

  var displayDayTwo = localStorage.getItem("dateTwo");
  displaySecondDate.innerHTML = displayDayTwo;

  var displayTempTwo = localStorage.getItem("tempTwo");
   tempTwo.innerHTML = displayTempTwo;
 
   var displayWindTwo = localStorage.getItem("windTwo");
   windTwo.innerHTML = displayWindTwo;
  
   var displayHumidityTwo = localStorage.getItem("humidityTwo");
   humidityTwo.innerHTML = displayHumidityTwo;
 
   var displayIconTwo = localStorage.getItem("iconTwo");
   $("#iconTwo").html(displayIconTwo);

  /* ---------------------------------- DAY 3 GET ITEM --------------------------------- */

   var displayDayThree = localStorage.getItem("dateThree");
   displayThirdDate.innerHTML = displayDayThree;

   var displayTempThree = localStorage.getItem("tempThree");
   tempThree.innerHTML = displayTempThree;
 
   var displayWindThree = localStorage.getItem("windThree");
   windThree.innerHTML =  displayWindThree;
 
   var displayHumidityThree = localStorage.getItem("humidityThree");
   humidityThree.innerHTML = displayHumidityThree;
 
   var displayIconThree = localStorage.getItem("iconThree");
   $("#iconThree").html(displayIconThree);
 
  /* ---------------------------------- DAY 4 GET ITEM --------------------------------- */

   var displayDayFour = localStorage.getItem("dateFour");
   displayFourthDate.innerHTML = displayDayFour;
    
   var displayTempFour = localStorage.getItem("tempFour");
   tempFour.innerHTML = displayTempFour;
 
   var displayWindFour = localStorage.getItem("windFour");
   windFour.innerHTML = displayWindFour;

   var displayHumidityFour = localStorage.getItem("humidityFour");
   humidityFour.innerHTML = displayHumidityFour;
 
   var displayIconFour = localStorage.getItem("iconFour");
   $("#iconFour").html(displayIconFour);
 
  /* ---------------------------------- DAY 5 GET ITEM --------------------------------- */

   var displayDayFive = localStorage.getItem("datefive");
   console.log("line223", displayDayFive)
   displayFifthDate.innerHTML = displayDayFive;
  console.log("line 231", displayFifthDate)
   var displayTempFive = localStorage.getItem("tempFive");
   tempFive.innerHTML = displayTempFive;
 
   var displayWindFive = localStorage.getItem("windFive");
   windFive.innerHTML = displayWindFive;

   var displayHumidityFive = localStorage.getItem("humidityFive");
   humidityFive.innerHTML = displayHumidityFive;
 
   var displayIconFive = localStorage.getItem("iconFive");
   $("#iconFive").html(displayIconFive);
 
  /* ---------------------------------- DAY 6 GET ITEM --------------------------------- */

  var displayDaySix = localStorage.getItem("dateSix");
   displaySixthDate.innerHTML = displayDaySix;

   var displayTempSix = localStorage.getItem("tempSix");
   tempSix.innerHTML = displayTempSix;
 
   var displayWindSix = localStorage.getItem("windSix");
   windSix.innerHTML = displayWindSix;

   var displayHumiditySix = localStorage.getItem("humiditySix");
   humiditySix.innerHTML = displayHumiditySix;
 
   var displayIconSix = localStorage.getItem("iconSix");
   $("#iconSix").html(displayIconSix);
 }

 getVal();