import * as yup from "yup";

export const getProductValidationSchema = (t) =>
  yup.object().shape({
    productName: yup
      .string()
      .required(t("validation.productName.required"))
      .min(2, t("validation.productName.min"))
      .max(100, t("validation.productName.max")),

    count: yup
      .number()
      .typeError(t("validation.count.typeError"))
      .required(t("validation.count.required")),

    imgLink: yup
      .string()
      .required(t("validation.imgLink.required"))
      .url(t("validation.imgLink.invalid")),
  });
