export const favoriteCitiesService = {
    saveFavoriteCityToStorage,
    loadFavoritesCititesList,
    toggleFavoriteCity,
    isFavoriteCity
}

function isFavoriteCity(city) {
    const cities = loadFavoritesCititesList('favoriteCities')
    if (!cities) return;
    return cities.some(cityToFind => cityToFind.Key === city?.Key)
}

function toggleFavoriteCity(city) {
    let cities = loadFavoritesCititesList('favoriteCities')
    if (!cities) {
        cities = [city]
        localStorage.setItem('favoriteCities', JSON.stringify(cities))
        return cities
    }
    const index = cities.findIndex(cityToFind => cityToFind.Key === city.Key)
    if (index > -1) {
        cities.splice(index, 1)
        localStorage.setItem('favoriteCities', JSON.stringify(cities))
    } else {
        cities = [...cities, city]
        localStorage.setItem('favoriteCities', JSON.stringify(cities))
    }
    return [...cities]
}

function saveFavoriteCityToStorage(key, city) {
    let cities = loadFavoritesCititesList('favoriteCities')
    cities = [...cities, city]
    localStorage.setItem(key, JSON.stringify(cities))
}

function loadFavoritesCititesList(key) {
    const citiesList = localStorage.getItem(key)
    return JSON.parse(citiesList)
}