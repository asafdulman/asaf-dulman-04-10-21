import { constants } from "../../constants"

export function favoritesReducer(state = {}, action) {
    switch (action.type) {
        case constants.SET_FAVORITES_CITIES:
            return {
                ...state,
                favoriteCities: action.favoriteCities
            }
        default:
            return state
    }
}