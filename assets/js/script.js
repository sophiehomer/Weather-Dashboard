/* -------------------------------- Variables ------------------------------- */
let city = document.getElementById("search-city").value;
let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0255c5995a7668330428d0c738d5fc29";

let fetchBtn = document.getElementById("fetch-btn")
let dayOne = moment().format("MM/DD/YYYY")
let dayTwo = moment().add(1, "days").format("MM/DD/YYYY")
let dayThree = moment().add(2, "days").format("MM/DD/YYYY")
let dayFour = moment().add(3, "days").format("MM/DD/YYYY")
let dayFive = moment().add(4, "days").format("MM/DD/YYYY")
let daySix = moment().add(5, "days").format("MM/DD/YYYY")

let displayCity = document.getElementById("city");
let displayTemp = document.getElementById("temp");
let displayWind = document.getElementById("wind");
let displayHumidity = document.getElementById("humid");
let displayDayOneDate = document.getElementById("dayOneDate");
let displayDayTwoDate = document.getElementById("dayTwoDate");
let displayDayThreeDate = document.getElementById("dayThreeDate");
let displayDayFourDate = document.getElementById("dayFourDate");
let displayDayFiveDate = document.getElementById("dayFiveDate");
let displayDaySixDate = document.getElementById("daySixDate");

let temp2 = document.getElementById("temp2")
let temp3 = document.getElementById("temp3")
let temp4 = document.getElementById("temp4")
let temp5 = document.getElementById("temp5")
let temp6 = document.getElementById("temp6")

let wind2 = document.getElementById("wind2")
let wind3 = document.getElementById("wind3")
let wind4 = document.getElementById("wind4")
let wind5 = document.getElementById("wind5")
let wind6 = document.getElementById("wind6")

let humid2 = document.getElementById("humid2")
let humid3 = document.getElementById("humid3")
let humid4 = document.getElementById("humid4")
let humid5 = document.getElementById("humid5")
let humid6 = document.getElementById("humid6")

/* -------------------------------- fetch api ------------------------------- */
fetch(requestUrl).then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})

/* ------------------------------- Search City ------------------------------ */
fetchBtn.onclick = function() {
    displayCity.innerHTML = city;


displayCity.innerHTML = city;

$("$icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + "png' alt='Icon depicting current weather.'>");
displayHumidity.innerHTML = ("Humidity: " + data.list[0].main.humidity);
displayTemp.innerHTML = ("Temp: " + data.list[0].main.humidity);
displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);
displayDayOneDate.innerHTML = dayOne; 

displayDayTwoDate.innerHTML = dayTwo;
$("$icon1").html("<img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + "png' alt='Icon depicting current weather.'>");
displayHumidity.innerHTML = ("Humidity: " + data.list[0].main.humidity);
displayTemp.innerHTML = ("Temp: " + data.list[0].main.humidity);
displayWind.innerHTML = ("Wind: " + data.list[0].wind.speed);
displayDayOneDate.innerHTML = dayOne; 





}