import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { MainMenu } from "./MainMenu";
import { UserInfo } from "./UserInfo";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center justify-between h-14">
        <div className="pl-5 flex items-center gap-10 h-14">
          <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            MyShop
          </div>
          <MainMenu />
          <LanguageSwitcher />
        </div>
        <UserInfo />
      </div>
    </header>
  );
}
