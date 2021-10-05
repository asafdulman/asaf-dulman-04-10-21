import { constants } from "../../constants";

export function setSearchCitiesList(cities) {
    return async dispatch => {
        dispatch({
            type: constants.SET_SEARCH_CITIES_LIST,
            cities
        })
    }
}

export function setSelectedCity(city) {
    return async dispatch => {
        dispatch({
            type: constants.SET_SELECTED_CITY,
            selectedCity: city
        })
    }
}

export function setSelectedCityConditions(cityConditions) {
    return async dispatch => {
        dispatch({
            type: constants.SET_SELECTED_CITY_CONDITIONS,
            selectedCityConditions: cityConditions
        })
    }
}
export function toggleTempatureValue(temperatureValue) {
    return async dispatch => {
        dispatch({
            type: constants.TOGGLE_TEMPATUREVALUE_VALUE,
            temperatureValue
        })
    }
}

export function toggleDarkMode(isDarkMode) {
    return async dispatch => {
        dispatch({
            type: constants.TOGGLE_DARK_MODE,
            isDarkMode
        })
    }
}