import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteList } from "../components/favorites/FavoriteList";
import { favoriteCitiesService } from "../services/favoriteCitiesService";
import { setFavoriteCity } from "../store/actions/favoritesActions";

export function Favorites() {

    const favoriteCities = useSelector(state => state.favoritesReducer.favoriteCities)
    const dispatch = useDispatch()

    useEffect(() => {
        getFavoriteCities()
    }, [])

    const getFavoriteCities = () => {
        const cities = favoriteCitiesService.loadFavoritesCititesList('favoriteCities')
        dispatch(setFavoriteCity(cities))
    }

    return (
        <div className="favorites-box">
            <h1>My Cities</h1>
            <FavoriteList favoriteCities={favoriteCities} />
        </div>
    )
}