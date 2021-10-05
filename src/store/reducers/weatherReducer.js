import { constants } from "../../constants"

export function weatherReducer(state = {}, action) {
    switch (action.type) {
        case constants.SET_SEARCH_CITIES_LIST:
            return {
                ...state,
                searchCities: action.cities
            }
        case constants.SET_SELECTED_CITY:
            return {
                ...state,
                selectedCity: action.selectedCity
            }
        case constants.SET_SELECTED_CITY_CONDITIONS:
            return {
                ...state,
                selectedCityConditions: action.selectedCityConditions
            }

        case constants.TOGGLE_TEMPERATUREVALUE_VALUE:
            return {
                ...state,
                temperatureValue: action.temperatureValue
            }
        case constants.TOGGLE_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.isDarkMode
            }

        default:
            return state
    }
}
