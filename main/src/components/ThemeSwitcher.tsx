import { useContext } from "react";
import { Menu } from "@headlessui/react";
import { ThemeContext } from "../contexts/ThemeProvider";

export const ThemeSwitcher = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <img
          src="/icons/theme.svg"
          alt="theme"
          className="w-8 cursor-pointer"
        />
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme("default")}
                className={`${
                  active ? "bg-gray-100 text-black" : "text-gray-700"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Midnight Bloom (Default)
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme("cafe-mocha")}
                className={`${
                  active ? "bg-gray-100 text-black" : "text-gray-700"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Cafe Mocha
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme("blush-ember")}
                className={`${
                  active ? "bg-gray-100 text-black" : "text-gray-700"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Blush Ember
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme("golden-hour")}
                className={`${
                  active ? "bg-gray-100 text-black" : "text-gray-700"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Golden Hour
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
