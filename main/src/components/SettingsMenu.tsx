import { Menu } from "@headlessui/react";

export const SettingsMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <img
          src="/icons/setting.svg"
          alt="Settings"
          className="w-8 cursor-pointer"
        />
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100 text-black" : "text-gray-700"
                } group flex w-full items-center rounded-md px-3 py-2 text-sm`}
              >
                🧠 About Us
              </button>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100 text-black" : "text-gray-700"
                } group flex w-full items-center rounded-md px-3 py-2 text-sm`}
              >
                ❓ Help & Support
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
