const apiKey ="5da0ccf60d0ddcafaa1b303b6b7b2e00";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchBox = document.querySelector(".search-box input")
    const searchBtn = document.getElementById("search-btn")
    const weatherIcon = document.getElementById("weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    
    else{
    
    const data = await response.json();
     console.log(data);
     
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
    document.querySelector(".condition").innerHTML= data.weather[0].main;
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h"; 
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./Icons/cloudy.png"
    }
        else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./Icons/sunny.png";
        }
        else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./Icons/rainystorm.png";
        }
        else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./Icons/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./Icons/mist.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
