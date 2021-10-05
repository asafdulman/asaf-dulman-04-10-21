import { constants } from "../../constants"

export function setFavoriteCity(favoriteCities) {
    return async dispatch => {
        dispatch({
            type: constants.SET_FAVORITES_CITIES,
            favoriteCities
        })
    }
}