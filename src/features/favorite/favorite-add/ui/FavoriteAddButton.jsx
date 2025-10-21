import { useAddToFavoritesMutation } from "@/entities/favoriteItem/api/favoriteItemApi";
import { useTranslation } from "react-i18next";

export default function FavoriteAddButton({ userId, productId, product }) {
  const [addFavorite] = useAddToFavoritesMutation();
  const { t } = useTranslation();

  const dataHandler = async () => {
    await addFavorite({
      userId: userId,
      productId: productId,
      product,
    });
  };

  return (
    <button
      className=" px-6 py-2 rounded-lg font-semibold transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white"
      onClick={dataHandler}
    >
      {t("productCard.addToFavoritesButton")}
    </button>
  );
}
