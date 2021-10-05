import { weatherService } from "../services/weatherService";
import { useDispatch } from "react-redux";
import { setSearchCitiesList } from "../store/actions/weatherActions";
import { SearchCitiesList } from "../components/SearchCitiesList";
import { CurrentWeather } from "../components/CurrentWeather";
import { useState } from "react";
import { ErrorMessageModal } from "../components/ErrorMessageModal";

export function Home() {

    const dispatch = useDispatch()
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onHandleChange = async ev => {
        if (/[^a-z]/i.test(ev.target.value)) {
            setErrorMessage('You can only search with english letters.')
            setIsMessageModalOpen(true)
            setTimeout(() => {
                setIsMessageModalOpen(false)
            }, 3000)
            return;
        }
        if (!ev.target.value) {
            dispatch(setSearchCitiesList(''));
            return;
        }
        const citiesList = await weatherService.getSearchCitiesList(ev.target.value)
        if (!citiesList) {
            setErrorMessage('There seems to be a problem loading the desired content.')
            setIsMessageModalOpen(true)
            setTimeout(() => {
                setIsMessageModalOpen(false)
            }, 3000)
        }
        dispatch(setSearchCitiesList(citiesList))
    }

    return (
        <div className="home-box">
            <ErrorMessageModal show={isMessageModalOpen} message={errorMessage} />
            <input className="search-input" type="text" placeholder="Search a City" onChange={(ev) => onHandleChange(ev)} />
            <SearchCitiesList />
            <CurrentWeather />
        </div>
    )
}
