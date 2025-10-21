import useProductValidationForm from "@/features/products/model/useValidationForm";
import Input from "@/shared/ui/Input";
import { useTranslation } from "react-i18next";

export default function ProductForm({ product = {}, onSubmit }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useProductValidationForm();

  const handleProductSubmit = (data) => {
    onSubmit({
      ...product,
      name: data.productName,
      price: Number(data.count),
      image: data.imgLink,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleProductSubmit)}
      className="flex flex-col gap-2 max-w-md mx-auto"
    >
      <Input
        label={t("productForm.name")}
        placeholder={t("validation.productName.required")}
        error={errors.productName?.message}
        {...register("productName")}
      />

      <Input
        label={t("productForm.count")}
        placeholder={t("validation.count.required")}
        error={errors.count?.message}
        {...register("count")}
      />

      <Input
        label={t("productForm.imgLink")}
        placeholder={t("validation.imgLink.required")}
        error={errors.imgLink?.message}
        {...register("imgLink")}
      />

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className="bg-blue-600 text-white rounded px-4 py-2 mt-2"
      >
        {t("productForm.save")}
      </button>
    </form>
  );
}
