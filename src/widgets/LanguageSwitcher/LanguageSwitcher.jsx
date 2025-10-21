import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("i18nextLng", e.target.value);
  };

  return (
    <select
      value={lang}
      onChange={handleChangeLang}
      className="bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:border-gray-400 dark:hover:border-slate-500 transition"
    >
      <option value="en">EN</option>
      <option value="ua">UA</option>
    </select>
  );
}
