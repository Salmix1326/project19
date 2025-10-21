import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { getProductValidationSchema } from "@/entities/product/api/validation";

const defaultValues = {
  productName: "",
  count: "",
  imgLink: "",
};

export const useProductValidationForm = () => {
  const { t } = useTranslation();
  const schema = getProductValidationSchema(t);

  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const field = useMemo(
    () => ({
      errors: form.formState.errors,
    }),
    [form.formState.errors]
  );

  return { ...form, field };
};

export default useProductValidationForm;