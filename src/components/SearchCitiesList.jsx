import { useSelector } from "react-redux";
import { SearchCityPreview } from "./SearchCityPreview";
export function SearchCitiesList() {

    const searchCities = useSelector(state => state.weatherReducer.searchCities)

    return (
        <div className="search-cities-box">
            {searchCities?.length ? searchCities?.map(city => <SearchCityPreview key={city.Key} city={city} />) : ''}
        </div>
    )
}