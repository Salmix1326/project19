import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLoginSchema, getRegisterSchema } from "@/entities/user/api/validation";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const defaultValues = {
  nickName: "",
  email: "",
  password: "",
};

export const useRegisterFormSignUp = () => {
  const { t } = useTranslation();
  const schema = getRegisterSchema(t);

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

export default useRegisterFormSignUp;