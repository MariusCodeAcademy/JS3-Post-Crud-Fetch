"use strict"; // here we go again
import { appId } from "./vars.js";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const city = "kaunas";
async function getWetherData() {
  //   const url = "/js/weather/sample.json";
  const url = `${weatherUrl}?q=${city}&units=metric&appid=${appId}`;
  const resp = await fetch(url);
  const data = await resp.text();
  return data;
}

getWetherData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
