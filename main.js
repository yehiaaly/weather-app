import { createIcons, Search, Droplets, Wind, Cloud, Sun, CloudRain, CloudDrizzle, CloudFog } from 'lucide';

// Initialize static icons
createIcons({
  icons: {
    Search,
    Droplets,
    Wind
  }
});

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric`

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIconContainer = document.querySelector(".weather-icon-container");

const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const temp = document.querySelector(".temp")
const cityEl = document.querySelector(".city")

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + `&q=${city}`);
        const data = await response.json();
        console.log(data);

        if (data.cod == "404") {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }

        cityEl.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp) + "°C"
        humidity.innerHTML = data.main.humidity + "%"
        wind.innerHTML = data.wind.speed + "km/h"

        let iconName = 'cloud-rain'; // default

        if (data.weather[0].main == "Clouds") {
            iconName = "cloud";
        } else if (data.weather[0].main == "Clear") {
            iconName = "sun";
        } else if (data.weather[0].main == "Rain") {
            iconName = "cloud-rain";
        } else if (data.weather[0].main == "Drizzle") {
            iconName = "cloud-drizzle";
        } else if (data.weather[0].main == "Mist") {
            iconName = "cloud-fog";
        }

        // Update weather icon
        weatherIconContainer.innerHTML = `<i data-lucide="${iconName}"></i>`;
        createIcons({
            icons: {
                Cloud, Sun, CloudRain, CloudDrizzle, CloudFog
            },
            root: weatherIconContainer
        });

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } catch (error) {
        console.log(error)
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        checkWeather(searchBox.value);
    }
})

// Initial load
checkWeather('Cairo')
