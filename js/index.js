var serchBut = document.querySelector('.serch-but')
var serchBar = document.querySelector('.serchBar')
var rowElement =document.querySelector('.rowELment')

// first day 
var todayName=document.querySelector('#todayName')
var todayHistory=document.querySelector('#today-history')
var todayMounth =document.querySelector('#todayMounth')
var country =document.querySelector('#country')
var firstDayImg = document.querySelector('#firstDayIcon')
var  degree =document.querySelector('#degree')
var todayCase =document.querySelector('#todayCase')
var umbrella =document.querySelector('#umbrella')
var todayWind = document.querySelector('#todayWind')
var todayHurricane =document.querySelector('#todayHurricane')
// sec day 
var secDayName = document.querySelector('.secDayName')
var secDayIcon = document.querySelector('.secDayIcon')
 var secDayDegree = document.querySelector('.secDayDegree')
var secDayWind = document.querySelector('.secDayWind')
var secDayCase =document.querySelector('.sec-day-case')
// third day

var thirdDayName = document.querySelector('.thirdDayName')
var thirdDayIcon = document.querySelector('.thirdDayIcon')
 var thirdDayDegree = document.querySelector('.thirdDayDegree')
var thirdDayWind = document.querySelector('.thirdDayWind')
var thirdDayCase =document.querySelector('.third-day-case')

// date obj
let date = new Date()
// console.log( date.getDate());
// console.log( date.toLocaleDateString("en-us",{weekday:"long"}))
// console.log( date.toLocaleDateString("en-us",{month:"long"}))


// var data = []
// if (data=JSON.parse(localStorage.getItem('WetherStorage'))) {
//   display()
// }




async function WetherdDisplay(city) {

  var data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=46bd5c63cd0b41a6b7971418242509&q=${city}&days=3`)
  // console.log(data);
  
  respon = await data.json()
  // console.log(respon);
  return respon;
  
}

WetherdDisplay()

function displayToday(info) {

var todayDate = new Date()
todayHistory.innerHTML= todayDate.getDate()
todayMounth.innerHTML=todayDate.toLocaleDateString('en-us',{month:"long"}) 
todayName.innerHTML=todayDate.toLocaleDateString('en-us',{weekday:"long"}) 

  country.innerHTML=info.location.name
  console.log(info);
  
 
  degree.innerHTML=info.current.heatindex_c+" c"
  todayCase.innerHTML=info.current.condition.text
  firstDayImg.setAttribute("src",`https:`+info.current.condition.icon)
  // console.log(info.current.condition.icon);
  date.getDate
  

  
  umbrella.innerHTML=info.current.humidity + " %"

  todayWind.innerHTML=info.current.wind_kph   + "   km/h"

  todayHurricane.innerHTML = info.current.wind_dir
  
}


function dayTwo(info) {

  var todayDate = new Date(info.forecast.forecastday[1].date)

secDayName.innerHTML=todayDate.toLocaleDateString('en-us',{weekday:"long"}) 


  
  secDayIcon.setAttribute('src',`https:`+info.forecast.forecastday[1].day.condition.icon)
  // info.forecast.forecastday[0].day.condition.icon
  secDayDegree.innerHTML=info.forecast.forecastday[1].day.maxtemp_c +" c"
  secDayWind.innerHTML=info.forecast.forecastday[1].day.mintemp_c +" c"
secDayCase.innerHTML=info.forecast.forecastday[1].day.condition.text

  
  
}


 async function startApp(city='Munich') {
  var respon =await WetherdDisplay(city)
  // console.log(respon);
  if(!respon.error){
    
  displayToday(respon);
  dayTwo(respon)
  thirdDay(respon)
  
}
}

startApp()





function thirdDay(info) {

  var todayDate = new Date(info.forecast.forecastday[2].date)

  thirdDayName.innerHTML=todayDate.toLocaleDateString('en-us',{weekday:"long"}) 
  
  
  thirdDayIcon.setAttribute('src','https:'+info.forecast.forecastday[2].day.condition.icon)
  thirdDayDegree.innerHTML=info.forecast.forecastday[2].day.maxtemp_c +" c"
  thirdDayWind.innerHTML=info.forecast.forecastday[2].day.mintemp_c +" c"
thirdDayCase.innerHTML=info.forecast.forecastday[1].day.condition.text

  
}






serchBar.addEventListener('keyup',function (e) {
  // console.log(serchBar.value);
  // WetherdDisplay(serchBar.value)
  startApp(serchBar.value)
  
  
})
serchBut.addEventListener('click',function (e) {
  // console.log(serchBar.value);
  // WetherdDisplay(serchBar.value)
  startApp(serchBar.value)
  
  valueNone()
  
})

function valueNone() {
  serchBar.value=""
}