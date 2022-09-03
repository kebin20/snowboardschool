let weather = {
    apikey: "1072c58fb827ff0250d45ffdfde36dcc",
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/3.0/onecall?q=${city}&@units={metric}&appid=${this.apikey}`
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { snow } = data.snow;


    }
}