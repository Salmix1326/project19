import { useState } from "react";
import { roles } from "@/shared/config/roles";
import { useTranslation } from "react-i18next";

export default function UserForm({ user = {}, onSubmit }) {
  const [email, setEmail] = useState(user?.email || "");
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [role, setRole] = useState(user?.role || "user");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...user,
      email,
      displayName,
      role,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("userForm.email")}
        disabled={!!user.id}
        required
      />
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder={t("userForm.name")}
        disabled={!!user.id}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {Object.entries(roles).map(([key, value]) => (
          <option key={key} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button type="submit">
        {user.id ? t("userForm.save") : t("userForm.add")}
      </button>
    </form>
  );
}
