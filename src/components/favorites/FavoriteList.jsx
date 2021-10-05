import { FavoritePreview } from "./FavoritePreview"

export function FavoriteList({ favoriteCities }) {

    return (
        <div className="favorites-list-box">
            {favoriteCities?.map(favoriteCity => <FavoritePreview key={favoriteCity.Key} favoriteCity={favoriteCity} />)}
        </div>
    )
}