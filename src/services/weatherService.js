import axios from 'axios';

export const weatherService = {
    getSearchCitiesList,
    getCurrentConditions,
    getDailyForecast,
    getCurrentLocationWeather
}

async function getSearchCitiesList(searchValue) {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&q=${searchValue}&language=en-us`;
    if (!searchValue) return;
    try {
        const cities = await axios.get(url);
        return cities.data

    } catch (error) {
        console.log(error)
        return false
    }
}

async function getCurrentConditions(cityKey) {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf`;
    try {
        const currentConditions = await axios.get(url)
        return currentConditions.data[0]
    } catch (error) {
        console.log(error)
        return false
    }
}

async function getDailyForecast(city) {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city?.Key}?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf`;
    try {
        const dailyForecast = await axios.get(url)
        return dailyForecast.data
    } catch (error) {
        console.log(error)
        return false
    }
}

async function getCurrentLocationWeather(location) {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&q=${location.lat}%2C${location.lng}`;
    try {
        const currentLocation = await axios.get(url)
        return currentLocation.data
    } catch (error) {
        console.log(error)
        return false
    }
}
