import { useState } from "react";
import { useSignUp } from "../model/useSignUp";
import { useNavigate } from "react-router";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";
import useRegisterFormSignUp from "../model/useRegisterFormSignUp";
import Input from "@/shared/ui/Input";

export default function SignUpForm({ onSuccess }) {
  const { signUp, isLoading, error } = useSignUp();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const RegisterFormSignUp = () => {
    const {
      register,
      handleSubmit,
      field: { errors },
      formState: { isSubmitting, isValid },
    } = useRegisterFormSignUp();

    const submit = async (values) => {
      setErrorMessage("");
      try {
        await signUp(values);
        onSuccess && onSuccess();
        navigate(frontRoutes.pages.HomePage.navigationPath);
      } catch (err) {
        setErrorMessage(err?.message || t("signUpForm.signUpError"));
      }
    };

    return (
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full flex flex-col gap-4"
      >
        <Input
          label={t("signUpForm.name")}
          placeholder={t("signUpForm.name")}
          error={errors.nickName?.message}
          {...register("nickName")}
        />
        <Input
          label={t("signUpForm.email")}
          placeholder={t("signUpForm.email")}
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label={t("signUpForm.password")}
          type="password"
          placeholder={t("signUpForm.password")}
          error={errors.password?.message}
          {...register("password")}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {t("signUpForm.signUpButton")}
        </button>

        {(error || errorMessage) && (
          <div className="text-red-500 text-sm font-medium mt-1">
            {errorMessage ||
              error?.data?.message ||
              t("signUpForm.signUpError")}
          </div>
        )}
      </form>
    );
  };

  return <RegisterFormSignUp />;
}
