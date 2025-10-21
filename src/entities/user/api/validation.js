import * as yup from "yup";

export const getRegisterSchema = (t) =>
  yup.object().shape({
    nickName: yup
      .string()
      .trim()
      .required(() => t("validation.nickName.required"))
      .min(2, () => t("validation.nickName.min"))
      .max(30, () => t("validation.nickName.max")),
    email: yup
      .string()
      .email(() => t("validation.email.invalid"))
      .required(() => t("validation.email.required")),
    password: yup
      .string()
      .min(8, () => t("validation.password.min"))
      .matches(/[a-z]/, () => t("validation.password.lowercase"))
      .matches(/[0-9]/, () => t("validation.password.number"))
      .required(() => t("validation.password.required")),
  });

export const getLoginSchema = (t) =>
  yup.object().shape({
    email: yup
      .string()
      .email(() => t("validation.email.invalid"))
      .required(() => t("validation.email.required")),
    password: yup
      .string()
      .min(8, () => t("validation.password.min"))
      .matches(/[a-z]/, () => t("validation.password.lowercase"))
      .matches(/[0-9]/, () => t("validation.password.number"))
      .required(() => t("validation.password.required")),
  });
