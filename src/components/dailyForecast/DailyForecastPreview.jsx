export function DailyForecastPreview({ forecast }) {

    const formatDate = () => {
        let date = forecast.Date
        let newDate = date.split('T')
        date = newDate[0]
        newDate = date.split('-')
        date = newDate.reverse().join('/')
        return date
    }

    const farToCelsius = temperature => {
        return temperature = ((temperature - 32) * 5 / 9).toFixed(0)
    }

    const getIconUrl = () => {
        let iconNum = forecast.Day.Icon;
        if (iconNum < 10) iconNum = '0' + iconNum;
        return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`
    }

    return (
        <div className="daily-forecast-preview-box">
            <h3>{formatDate()}</h3>
            <img src={getIconUrl()} alt="" />
            <p>{forecast.Day.IconPhrase}</p>
            <p>{farToCelsius(forecast?.Temperature.Minimum.Value)}°c - {farToCelsius(forecast.Temperature.Maximum.Value)}°c </p>
        </div>
    )
}