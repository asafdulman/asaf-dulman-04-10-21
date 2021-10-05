import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { NavBar } from "./components/NavBar";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { weatherService } from "./services/weatherService";
import { setSelectedCity, setSelectedCityConditions } from "./store/actions/weatherActions";


function App() {
  const isDark = useSelector(state => state.weatherReducer.isDarkMode)
  const dispatch = useDispatch()

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async position => {
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      const currentLocation = await weatherService.getCurrentLocationWeather(location)
      const defaultCityConditions = await weatherService.getCurrentConditions(currentLocation.Key)
      dispatch(setSelectedCity(currentLocation))
      dispatch(setSelectedCityConditions(defaultCityConditions))
    }, async error => {
      console.log(error)
      const defaultCityConditions = await weatherService.getCurrentConditions('215854')
      dispatch(setSelectedCityConditions(defaultCityConditions))
    });
  }

  return (
    <div className={isDark ? 'dark-app' : 'app'}>
      <NavBar />
      <Switch>
        <Route path='/favorites' component={Favorites} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;