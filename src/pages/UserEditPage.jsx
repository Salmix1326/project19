import { useParams, useNavigate } from "react-router";
import { useGetAllUsersQuery } from "../entities/user/api/userApi";
import { UserEditForm } from "@/features/users";
import { frontRoutes } from "../shared/config/routes/frontRoutes";
import { useTranslation } from "react-i18next";

export default function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: users = [], isLoading } = useGetAllUsersQuery();
  const user = users.find((u) => u.id === id);
  const { t } = useTranslation();

  const handleSuccess = () => {
    navigate(frontRoutes.pages.UsersPage.navigationPath);
  };

  if (isLoading) return <div>{t("sharedTranslations.loading")}...</div>;

  return (
    <div>
      <h1>Редагування користувача</h1>
      <UserEditForm user={user} onSuccess={handleSuccess} />
    </div>
  );
}
