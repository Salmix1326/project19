import ProductsList from "../widgets/ProductsList/ProductsList";
import { useSelector } from "react-redux";

import ProductAddButton from "../features/products/product-add/ui/ProductAddButton";
import { useTranslation } from "react-i18next";

export default function ProductsPage() {
  const user = useSelector((state) => state.auth.user);
  const role = user?.role;
  const { t } = useTranslation();

  return (
    <div className="flex min-h-full bg-gradient-to-br  dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-slate-800 dark:text-slate-100 tracking-tight">
          {t("products.title")}
        </h1>
        {role === "admin" || role === "manager" ? (
          <div className="flex flex-col items-center mb-8">
            <ProductAddButton />
          </div>
        ) : null}
        <ProductsList user={user} role={role} />
      </div>
    </div>
  );
}
