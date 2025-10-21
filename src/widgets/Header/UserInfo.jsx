import { useLogout } from "@/features/auth/logout/model/useLogout";
import userDefault from "@/assets/user-default.svg";
import { GoogleAuthProvider } from "firebase/auth";

import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { frontRoutes } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export function UserInfo() {
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { t } = useTranslation()

  if (!user) {
    return (
      <Link
        to={frontRoutes.pages.LoginPage.navigationPath}
        className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
      >
        {t("loginPage.regTypeLogin")}
      </Link>
    );
  }

  const onLogout = () => {
    logout();
    navigate(frontRoutes.pages.LoginPage.navigationPath);
  };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  return (
    <div className="flex gap-5 pr-5">
      <div className="flex gap-2">
        <img
          src={user.photoURL || userDefault}
          alt="user avatar"
          className="w-9 h-9 rounded-full object-cover border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-700"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {user.email}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {user.role}
          </span>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="px-3 py-1.5 rounded-md bg-red-500 hover:bg-red-600 text-white text-xs font-medium transition"
      >
        {t("loginPage.regTypeLogOut")}
      </button>
    </div>
  );
}
