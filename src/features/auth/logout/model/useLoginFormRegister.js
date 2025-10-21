import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLoginSchema } from "@/entities/user/api/validation";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const defaultValues = {
  email: "",
  password: "",
};

export const useLoginFormSchema = () => {
  const { t } = useTranslation();
  const loginSchema = getLoginSchema(t);

  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const field = useMemo(
    () => ({
      errors: form.formState.errors,
    }),
    [form.formState.errors]
  );

  return { ...form, field };
};

export default useLoginFormSchema;
