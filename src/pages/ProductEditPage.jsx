import { useParams, useNavigate } from "react-router";
import { useGetProductByIdQuery } from "@/entities/product/api/productApi";
import { ProductEditForm, ProductAddForm } from "@/features/products";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export default function ProductEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useGetProductByIdQuery(id, {
    skip: !id,
  });
  const { t } = useTranslation();

  const handleSuccess = () => {
    navigate(frontRoutes.pages.ProductsPage.navigationPath);
  };

  if (isLoading && id) return <div>{t("sharedTranslations.loading")}...</div>;

  return (
    <div>
      <h1>{id ? t("productForm.editButton") : t("productForm.addButton")}</h1>
      {id ? (
        <ProductEditForm product={product} onSuccess={handleSuccess} />
      ) : (
        <ProductAddForm onSuccess={handleSuccess} />
      )}
    </div>
  );
}
