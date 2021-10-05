import { useDispatch } from "react-redux";
import { weatherService } from "../services/weatherService"
import { setSelectedCityConditions, setSelectedCity, setSearchCitiesList } from "../store/actions/weatherActions";

export function SearchCityPreview({ city }) {

    const dispatch = useDispatch()

    const onSelectSearchCity = async () => {
        dispatch(setSelectedCity(city))
        const selectedCityConditions = await weatherService.getCurrentConditions(city.Key);
        dispatch(setSelectedCityConditions(selectedCityConditions))
        dispatch(setSearchCitiesList(''))
    }

    return (
        <div onClick={() => onSelectSearchCity()} className="search-city-preview-box">
            <p>{city.LocalizedName}</p>
        </div>
    )
}
