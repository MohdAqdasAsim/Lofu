import { ThemeSwitcher } from "./ThemeSwitcher";
import { SettingsMenu } from "./SettingsMenu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full h-16 px-4 flex items-center justify-between">
      <Link to="/">
        <img src="./logo.svg" alt="logo" className="w-16" />
      </Link>

      <div className="flex items-center gap-4">
        <span>
          <ThemeSwitcher />
        </span>
        <span>
          <SettingsMenu />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
