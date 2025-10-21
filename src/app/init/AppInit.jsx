import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/shared/config/firebase-config";
import { logout } from "@/features/auth";

import { useRefreshMutation } from "@/features/auth/api/authApi";
import { useTranslation } from "react-i18next";

export function AppInit() {
  const dispatch = useDispatch();
  const [refresh] = useRefreshMutation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await refresh().unwrap();
        } catch {
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    });
    return () => unsubscribe();
  }, [dispatch, refresh]);

  useEffect(() => {
    const onStorage = (e) => {
      if (
        e.key === "i18nextLng" &&
        e.newValue &&
        e.newValue !== i18n.language
      ) {
        i18n.changeLanguage(e.newValue);
      }
    };
    //---- додаємо прослуховування на зміну значення у localStorage
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [i18n]);
  return null;
}
