import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favoriteCitiesService } from "../services/favoriteCitiesService";
import { weatherService } from "../services/weatherService";
import { setFavoriteCity } from "../store/actions/favoritesActions";
import { DailyForecastList } from "./dailyForecast/DailyForecastList";

export function CurrentWeather() {

    const [isFavoriteCity, setIsFavoriteCity] = useState()
    const [forecastList, setForecastList] = useState()
    const currentWeather = useSelector(state => state.weatherReducer.selectedCityConditions)
    const selectedCity = useSelector(state => state.weatherReducer.selectedCity)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsFavoriteCity(favoriteCitiesService.isFavoriteCity(selectedCity))
        onGetDailyForecastList()
    }, [selectedCity])

    const onGetDailyForecastList = async () => {
        const dailyForecastList = await weatherService.getDailyForecast(selectedCity)
        setForecastList(dailyForecastList.DailyForecasts)
    }

    const onToggleFavoriteCity = () => {
        const cities = favoriteCitiesService.toggleFavoriteCity(selectedCity)
        dispatch(setFavoriteCity(cities))
        setIsFavoriteCity(favoriteCitiesService.isFavoriteCity(selectedCity))
    }

    return (
        <>
            <div className="current-weather-box">
                {isFavoriteCity && <i className="fas fa-star favorite-icon"></i>}
                <h1>{selectedCity ? selectedCity?.LocalizedName : 'Tel-Aviv'}</h1>
                <p>{currentWeather?.WeatherText}</p>
                <p>{currentWeather?.Temperature?.Metric.Value}°c</p>
                {selectedCity && <button className={isFavoriteCity ? 'favorite-city-btn' : 'not-favorite-city-btn'} onClick={() => onToggleFavoriteCity()}>{isFavoriteCity ? 'Remove from Favorites' : 'Add to Favorites'}</button>}
            </div>
            <DailyForecastList forecastList={forecastList} />
        </>
    )
}
