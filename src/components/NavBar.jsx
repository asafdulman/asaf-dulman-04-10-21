import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleDarkMode } from "../store/actions/weatherActions";

export function NavBar() {

    const dispatch = useDispatch()
    const isDark = useSelector(state => state.weatherReducer.isDarkMode)

    const onToggleDarkMode = () => {
        dispatch(toggleDarkMode(!isDark))
    }

    return (
        <div className="nav-bar-box">
            <div className="logo-box">
                MyWeatherApp
            </div>
            <div className="nav-links-box">
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
                <button onClick={() => onToggleDarkMode()}>{isDark ? 'Light' : 'Dark'}</button>
            </div>
        </div>
    )
}