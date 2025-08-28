const apiKey = "11cddde5c5e5efdcd45e14b09d41b4c9";

document.getElementById("getForecastBtn")?.addEventListener("click", () => {
    const city = document.getElementById("forecastCityInput").value.trim();
    if (city) {
        localStorage.setItem("lastForecastCity", city);
        fetchFiveDayForecast(city);
    }
});function fetchFiveDayForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.cod !== "200") {
                alert(`Error: ${data.message}`);
                return;
            }

            const forecastContainer = document.getElementById("forecastDisplay");
            forecastContainer.innerHTML = "";

            for (let i = 0; i < data.list.length; i += 8) {
                const day = data.list[i];
                const date = new Date(day.dt_txt).toLocaleDateString();
                const description = day.weather[0].description;
                const temp = day.main.temp;
                const icon = day.weather[0].icon;

                forecastContainer.innerHTML += `
                    <div class="weather-card">
                    <h3>${date}</h3>
                    <p>${description}</p>
                    <p>Temp: ${temp} °F</p>
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
                    </div>
                `;
            }
        })
        .catch(() => alert("City Not Found"));
    }

    window.addEventListener("load", () => {
        const lastCity = localStorage.getItem("lastForecastCity");
        if (lastCity) fetchFiveDayForecast(lastCity);
    });