import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return <h1>{t("home.title")}</h1>;
}
