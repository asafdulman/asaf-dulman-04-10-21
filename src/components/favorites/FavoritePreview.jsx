import { useEffect, useState } from "react"
import { weatherService } from "../../services/weatherService";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCity, setSelectedCityConditions } from "../../store/actions/weatherActions";
import { favoriteCitiesService } from "../../services/favoriteCitiesService";
import { setFavoriteCity } from "../../store/actions/favoritesActions";

export function FavoritePreview({ favoriteCity }) {

    const [currentCityWeather, setCurrentWeather] = useState()
    let history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        getCurrentConditions()
    }, [])

    const getCurrentConditions = async () => {
        const currentWeather = await weatherService.getCurrentConditions(favoriteCity.Key)
        setCurrentWeather(currentWeather)
    }

    const onRemoveFavoriteCity = (ev) => {
        ev.stopPropagation()
        const cities = favoriteCitiesService.toggleFavoriteCity(favoriteCity)
        dispatch(setFavoriteCity(cities))
    }

    const moveToCityView = () => {
        dispatch(setSelectedCity(favoriteCity))
        dispatch(setSelectedCityConditions(currentCityWeather))
        history.push("/");
    }

    return (
        <div className="favorites-preview-box" onClick={() => moveToCityView()}>
            <p>ID - {favoriteCity.Key}</p>
            <h2>{favoriteCity?.LocalizedName}</h2>
            <h3>{currentCityWeather?.WeatherText}</h3>
            <p>{currentCityWeather?.Temperature?.Metric.Value}°c</p>
            <button onClick={(ev) => onRemoveFavoriteCity(ev)}>Remove From Favorites</button>
        </div>
    )
}
