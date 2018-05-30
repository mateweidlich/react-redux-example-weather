import axios from 'axios';

const WEATHER_API_KEY = '371a094518997f1aaff8e0e6acf48840';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	return {
		type: FETCH_WEATHER,
		payload: axios.get(`${ROOT_URL}&q=${city},us`)
	};
}