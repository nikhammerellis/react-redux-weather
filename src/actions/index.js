import axios from 'axios';

const API_KEY = 'a456dd5e0f012c9e21125c8a92e492b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
