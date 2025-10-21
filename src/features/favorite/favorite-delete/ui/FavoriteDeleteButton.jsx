import deleteIcon from "@/assets/icons/delete-white.svg";
import { useRemoveFromFavoritesMutation } from "@/entities/favoriteItem/api/favoriteItemApi";
import { useTranslation } from "react-i18next";

export function FavoriteDeleteButton({ userId, productId }) {
  const [deleteFavorite] = useRemoveFromFavoritesMutation();
  const { t } = useTranslation();

  const handleDelete = async () => {
    await deleteFavorite({ userId, productId });
  };

  return (
    <button
      className="px-1.5 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-medium shadow focus:outline-none focus:ring-2 focus:ring-red-400 flex items-center justify-center"
      onClick={handleDelete}
      title={t("productCard.deleteFromFavoritesButton")}
    >
      <img
        src={deleteIcon}
        alt={t("productCard.deleteFromFavoritesButton")}
        className="w-4 h-4"
      />
    </button>
  );
}
