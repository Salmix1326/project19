import { UserList } from "@/widgets/userList/UserList";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function UsersPage() {
  const role = useSelector((state) => state.auth.role);
  const { t } = useTranslation();

  // if (role !== 'admin') {
  //   return <div>Доступ лише для адміністратора</div>
  // }

  return (
    <div>
      <h1>{t("users.title")}</h1>
      <UserList />
    </div>
  );
}
