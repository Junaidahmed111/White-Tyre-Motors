import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems: string[] = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
  ];

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center gap-x-2 justify-between w-full lg:w-[80%] rounded-md border h-12 border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          Options
          <BsChevronDown />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false);
                  // Add your logic for the selected option here
                  console.log(`Selected: ${item}`);
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
