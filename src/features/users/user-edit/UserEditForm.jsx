import {
  useUpdateUserRoleMutation,
  useAddUserMutation,
} from "@/entities/user/api/userApi";
import UserForm from "@/entities/user/ui/UserForm";

export function UserEditForm({ user, onSuccess }) {
  const [updateUserRole, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserRoleMutation();
  const [addUser, { isLoading: isAdding, error: addError }] =
    useAddUserMutation();

  const handleSubmit = async (id, email, displayName, role) => {
    if (id) {
      await updateUserRole({ uid: id, role });
    } else {
      await addUser({ email, displayName, role });
    }
    onSuccess && onSuccess();
  };

  return <UserForm user={user} onSubmit={handleSubmit} />;
}
