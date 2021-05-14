"use strict"; // here we go again
import { appId } from "./vars.js";
// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const city = "kaunas";
const weatherUrl = "/js/weather/sample.json";

const weatherEl = document.getElementById("weather");

async function getWetherData() {
  const url = `${weatherUrl}?q=${city}&units=metric&appid=${appId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

getWetherData()
  .then((data) => drawOras(data))
  .catch((err) => console.error(err.message));

function drawOras(data) {
  console.log("data", data);
  const {
    main: { temp_max, temp_min, temp },
    weather,
  } = data;
  const widgetEl = document.createElement("article");
  widgetEl.className = "widget";
  widgetEl.innerHTML = `
            <div class="weatherIcon"><i class="wi wi-day-cloudy"></i></div>
            <div class="weatherInfo">
                <div class="temperature"><span>${temp}&deg;</span></div>
                <div class="description">
                <div class="weatherCondition">${weather[0].description}</div>
                <div class="place">Min: ${temp_min}&deg;, Max: ${temp_max}&deg;</div>
                </div>
            </div>
            <div class="date">Vejas: N 20ms</div>
        `;
  weatherEl.append(widgetEl);
}
