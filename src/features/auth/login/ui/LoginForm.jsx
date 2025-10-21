import React, { useState } from "react";
import { useLogin } from "../model/useLogin";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";
import Input from "@/shared/ui/Input";
import useLoginFormSchema from "../../logout/model/useLoginFormRegister";

export default function LoginForm() {
  const { login, googleLogin, isLoading, error } = useLogin();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginFormSchema();

  const onSubmit = async (values) => {
    setErrorMessage("");
    try {
      await login(values)
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (err) {
      setErrorMessage(err?.data?.message || t("loginForm.loginError"));
    }
  };

  const handleGoogle = async () => {
    setErrorMessage("");
    try {
      await googleLogin();
      navigate(frontRoutes.pages.HomePage.navigationPath);
    } catch (err) {
      setErrorMessage(err?.message || t("loginForm.googleLoginError"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <Input
        label={t("loginForm.email")}
        placeholder={t("loginForm.email")}
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        label={t("loginForm.password")}
        type="password"
        placeholder={t("loginForm.password")}
        error={errors.password?.message}
        {...register("password")}
      />
      <button type="submit" disabled={isLoading}>
        {t("loginForm.login")}
      </button>
      <button type="button" onClick={handleGoogle} disabled={isLoading}>
        Google
      </button>
      {(error || errorMessage) && (
        <div className="text-red-500 mt-1">
          {errorMessage || error?.data?.message}
        </div>
      )}
    </form>
  );
}
