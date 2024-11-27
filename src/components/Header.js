import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import "../assets/styles.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (menuKey) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const navigation = [
    { name: "Home", path: "/", external: false },
    { name: "Services", path: "/services", external: false },
    {
      name: "About",
      subItems: [
        { name: "About Us", path: "/about-us", external: false },
        { name: "Our Team", path: "/our-team", external: false },
      ],
    },
    {
      name: "More",
      subItems: [
        { name: "FAQ's", path: "/faqs", external: false },
        { name: "Facilities", path: "/facilities", external: false },
        {
          name: "Virtual Programming",
          path: "https://www.youtube.com/channel/UCwlvTf4r-Qx4GB3caNw0AEg",
          external: true, // Mark as external
        },
      ],
    },
    { name: "Contact", path: "/contact", external: false },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Business Name Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="ms-5 mt-5 newsreader-font">
            Piedmont Adult Day Program
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((navItem) =>
            navItem.subItems ? (
              <Menu
                key={navItem.name}
                open={dropdownOpen[navItem.name]}
                handler={() => toggleDropdown(navItem.name)}
              >
                <MenuHandler>
                  <button className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2">
                    {navItem.name}
                    {dropdownOpen[navItem.name] ? (
                      <ChevronUpIcon className="h-4 w-4 transition-transform" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4 transition-transform" />
                    )}
                  </button>
                </MenuHandler>
                <MenuList>
                  {navItem.subItems.map((subItem) => (
                    <MenuItem key={subItem.name}>
                      {subItem.external ? (
                        <a
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-600"
                        >
                          {subItem.name}
                        </a>
                      ) : (
                        <Link
                          to={subItem.path}
                          className="text-gray-900 hover:text-gray-600"
                        >
                          {subItem.name}
                        </Link>
                      )}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : navItem.external ? (
              <a
                key={navItem.name}
                href={navItem.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
              >
                {navItem.name}
              </a>
            ) : (
              <Link
                key={navItem.name}
                to={navItem.path}
                className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
              >
                {navItem.name}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full bg-white p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              {/* Add your logo here if needed */}
            </Link>
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((navItem) =>
              navItem.subItems ? (
                <div key={navItem.name} className="mb-2">
                  <div className="text-gray-900 w-full text-left px-3 py-2 rounded-lg font-semibold">
                    {navItem.name}
                  </div>
                  {navItem.subItems.map((subItem) => (
                    subItem.external ? (
                      <a
                        key={subItem.name}
                        href={subItem.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-900 hover:bg-gray-50 w-full text-left pl-6 pr-3 py-2 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ) : (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block text-gray-900 hover:bg-gray-50 w-full text-left pl-6 pr-3 py-2 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    )
                  ))}
                </div>
              ) : navItem.external ? (
                <a
                  key={navItem.name}
                  href={navItem.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-900 hover:bg-gray-50 w-full text-left px-3 py-2 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.name}
                </a>
              ) : (
                <Link
                  key={navItem.name}
                  to={navItem.path}
                  className="block text-gray-900 hover:bg-gray-50 w-full text-left px-3 py-2 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.name}
                </Link>
              )
            )}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
