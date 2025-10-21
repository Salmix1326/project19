import { useTranslation } from "react-i18next";

export default function CartItemCard({ item, children }) {
  const { t } = useTranslation();

  const quantity = item.quantity || 1;
  const total = (item.price || 0) * quantity;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex flex-col gap-2 w-full sm:w-80 transition hover:shadow-lg">
      <div className="text-lg font-semibold text-slate-800 dark:text-slate-100 truncate">
        {item.name}
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-300">
        {t("cartCard.price")}:{" "}
        <span className="font-medium">
          {item.price} {t("cart.currency")}
        </span>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-300">
        {t("cartCard.sum")}:{" "}
        <span className="font-medium">
          {total} {t("cart.currency")}
        </span>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
