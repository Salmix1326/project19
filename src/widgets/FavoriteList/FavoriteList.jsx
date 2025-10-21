import { useState, useEffect } from "react";
import { useGetUserFavoritesQuery } from "@/entities/favoriteItem/api/favoriteItemApi";
import FavoriteItemCard from "@/entities/favoriteItem/ui/favoriteItemCard";
import { useTranslation } from "react-i18next";

export default function FavoritesList({ user }) {
  const { data, isLoading, error } = useGetUserFavoritesQuery(user.id);
  const [favorites, setFavorites] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      const favArray = Array.isArray(data) ? data : Object.values(data);
      setFavorites(favArray);
      console.log(favArray);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="text-center text-lg text-slate-500 py-8 animate-pulse">
        {t("sharedTranslations.loading")}...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-lg text-red-500 py-8">
        {t("favoritesList.loadingError")}
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center text-lg text-slate-400 py-8">
        {t("favoritesList.emptyList")}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((p) => (
        <FavoriteItemCard key={p.id} user={user} product={p} />
      ))}
    </div>
  );
}
