import { useTranslation } from "react-i18next";

export default function ProductCard({ product, children }) {
  const { t } = useTranslation();
  return (
    <div className="group relative flex h-72 w-full flex-col gap-1 items-center rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800">
      {product.image && (
        <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-700">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <h3>{product.name}</h3>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        <span className="font-bold text-indigo-600 dark:text-indigo-400">
          {product.price}
        </span>{" "}
        {t("productCard.currency")}
      </div>
      {product.ownerName && (
        <div className="mt-1 text-xs text-slate-400">
          {t("productCard.owner")}: {product.ownerName || product.ownerId}
        </div>
      )}
      <div className="mt-auto w-full">{children}</div>
    </div>
  );
}
