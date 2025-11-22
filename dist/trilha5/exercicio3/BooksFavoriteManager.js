import { FavoriteManager } from "./FavoriteManager.js";
export class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        // Insere no início
        this.favorites.unshift(item);
    }
    getFavorites() {
        return this.favorites;
    }
}
//# sourceMappingURL=BooksFavoriteManager.js.map