import { FavoriteManager } from "./FavoriteManager.js";
export class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (!this.favorites.includes(item)) {
            this.favorites.push(item);
        }
        this.favorites.sort();
    }
    getFavorites() {
        return this.favorites;
    }
}
//# sourceMappingURL=MoviesFavoriteManager.js.map