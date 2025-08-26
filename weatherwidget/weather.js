const apiKey = "23a12995ae59e4e52a0fbf5079a9e3a5";

document.getElementById("getWeatherBTn")?.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        localStorage.setitem("lastCity", city);
        fetchTodayWeather(city);
    }
});

function fetchTodayWeather(city) {
    fetch("https://")