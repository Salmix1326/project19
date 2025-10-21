import { useSelector } from "react-redux";
import { selectAuthUser } from "@/features/auth/api/authSlice";
import { Link, useLocation } from "react-router";
import { getPagesObjectList } from "@/shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export function MainMenu() {
  const user = useSelector(selectAuthUser);
  const { t } = useTranslation();
  const location = useLocation();

  const allowedRoutes = getPagesObjectList().filter(({ meta }) => {
    if (!meta.isInMenu) return false;
    if (!meta.requireAuth) return true;
    if (!user) return false;
    if (!meta.roles) return true;
    return meta?.roles.includes(user?.role);
  });

  return (
    <nav className=" bg-white dark:bg-slate-900 shadow-md">
      <ul className="flex items-center justify-start gap-6 py-3">
        {allowedRoutes.map(({ path, meta }) => {
          const isActive = location.pathname === `/${path}`;
          return (
            <li key={path}>
              <Link
                to={path}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow"
                      : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }
                `}
              >
                {t(meta.title)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
