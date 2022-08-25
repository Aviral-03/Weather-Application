let weather = {
    apiKey: "d907b297ebf90a515bdfa6df828a70ce",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.6534817&lon=-79.3839347&mode=XML&units=metric&appid="
            +this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const currentTemperature = data.main.temp;
        const cloudCondition = data.weather[0].description;
        const visibility = data.visibility;
        const maxTemp = data.main.temp_max;
        const minTemp = data.main.temp_min;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const rain = data.clouds.all;
        const apparentTemperature = data.main.feels_like;
        console.log(currentTemperature, cloudCondition, visibility, maxTemp, minTemp, pressure, humidity, wind, rain, apparentTemperature)
        document.querySelector('.temperature').innerHTML = Math.round(currentTemperature) + ' '+ '\xB0C'
        document.querySelector('.WeatherCategory').innerHTML =  cloudCondition;
        document.querySelector('#pressure').innerHTML = pressure;
        document.querySelector('#humidity').innerHTML = humidity + `<span style="font-size: 20px" > %</span>`
        document.querySelector('#visibility').innerHTML = visibility/1000 + `<h4 style="font-size: 20px"> km</h4>`
        document.querySelector('#maxMinTemp').innerHTML = Math.round(maxTemp) + '\xB0' + ' '+ Math.round(minTemp)
            + '\xB0'
        document.querySelector('#windStatus').innerHTML = wind + `<h4 style="font-size: 20px"> km/hr</h4>`
        document.querySelector('.RainPercentage').innerHTML = 'Rain - ' + (rain) + '%'
        document.querySelector('.apparent-temperature').innerHTML = 'Feels Like: ' + Math.round(apparentTemperature) + '\xB0C'

        if (cloudCondition === 'clear sky') {
            document.querySelector('.icon').src = './images/sun.png';
        } else if (cloudCondition === 'few clouds') {
            document.querySelector('.icon').src = './images/cloudy.png';
        } else if (cloudCondition === 'scattered clouds' || 'broken clouds') {
            document.querySelector('.icon').src = './images/clouds.png';
        } else if (cloudCondition === 'shower rain' || 'rain') {
            document.querySelector('.icon').src = './images/rainy.png';
        } else if (cloudCondition === 'thunderstorm') {
            document.querySelector('.icon').src = './images/storm.png';
        } else {
            document.querySelector('.icon').src = './images/snow.png';
        }

        const date = new Date(data.sys.sunrise * 1000);
        const sunrise = new Date((data.sys.sunrise + data.timezone) * 1e3).toISOString().slice(-13, -8) + ' AM';
        const sunset = new Date((data.sys.sunset + data.timezone) * 1e3).toISOString().slice(-13, -8) + ' PM'
        console.log(date, sunrise, sunset);
        let dateString = String(date)
        document.querySelector('.Day').innerHTML = dateString.substring(0, 3) + ','
        document.querySelector('.Date').innerHTML = dateString.substring(4,10)

        document.querySelector('.sunrise_text').innerHTML = sunrise;
        document.querySelector('.sunset_text').innerHTML = sunset;

        // const date = new Date(data.sys.sunrise * 1000);
        // const sunrise = new Date((data.sys.sunrise + data.timezone) * 1e3).toISOString().slice(-13, -8) + ' AM';
        // const sunset = new Date((data.sys.sunset + data.timezone) * 1e3).toISOString().slice(-13, -8) + ' PM'
        // console.log(date, sunrise, sunset);
        // let dateString = String(date)
        // document.querySelector('.Day').innerHTML = dateString.substring(0, 3) + ','
        // document.querySelector('.Date').innerHTML = dateString.substring(4,10)
        //
        // document.querySelector('.sunrise_text').innerHTML = sunrise;
        // document.querySelector('.sunset_text').innerHTML = sunset;
        // const date = new Date(data.sys.sunrise * 1000);
        // const sunrise = new Date((data.sys.sunrise + data.timezone) * 1e3).toISOString().slice(-13, -8) + ' AM';
        // const sunset = new Date((data.sys.sunset + data.timezone) * 1e3).toISOString().slice(-13, -8) + ' PM'
        // console.log(date, sunrise, sunset);
        // let dateString = String(date)
        // document.querySelector('.Day').innerHTML = dateString.substring(0, 3) + ','
        // document.querySelector('.Date').innerHTML = dateString.substring(4,10)
        //
        // document.querySelector('.sunrise_text').innerHTML = sunrise;
        // document.querySelector('.sunset_text').innerHTML = sunset;
    }

};
weather.fetchWeather()