import { DailyForecastPreview } from "./DailyForecastPreview";

export function DailyForecastList({ forecastList }) {

    return (
        <div className="daily-forecast-list-box">
            {forecastList?.map(forecast => <DailyForecastPreview key={forecast.EpochDate} forecast={forecast} />)}
        </div>
    )
}