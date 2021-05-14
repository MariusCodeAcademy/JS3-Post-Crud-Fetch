"use strict"; // here we go again
import { appId } from "./vars.js";
// const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const city = "kaunas";
const weatherUrl = "/js/weather/sample.json";

async function getWetherData() {
  const url = `${weatherUrl}?q=${city}&units=metric&appid=${appId}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

getWetherData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
