const apiKey = "11cddde5c5e5efdcd45e14b09d41b4c9";

document.getElementById("getWeatherBtn")?.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        localStorage.setItem("lastCity", city);
        fetchForecast(city);
    }
});

function fetchForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then (res => res.json())
        .then (data => {
            console.log(data);

            if (data.cod !== "200") {
                alert(`Error: ${data.message}`);
                return;
            }

            const forecastContainer = document.getElementById("forecastDisplay");
            forecastContainer.innerHTML = "";

            for (let i = 0; i < data.list.length; i += 8) {
                const day = data.list[i];
                forecastContainer.innerHTML += `
                  <div class="weather-card">
                    <h3>${new Date(day.dt_txt).toLocaleDateString()}</h3>
                    <p>${day.weather[0].description}</p>
                    <p>Temp: ${day.main.temp} °F</p>
                    <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                    </div>
                `;
            }
        })
        .catch(() => alert("City Not Found"));
    }

    window.addEventListener("load", () => {
        const lastCity = localStorage.getItem("lastCity");
        if (lastCity) fetchForecast(lastCity);
    });