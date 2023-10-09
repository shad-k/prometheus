import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type HamburgerMenuProps = {
  onClose: () => void;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClose }) => {
  return (
    <div className="bg-primaryBlue/50 w-full h-full text-white p-6 flex flex-col gap-4">
      <div className="flex items-center justify-end">
        <button onClick={onClose} className="text-2xl">
          <AiOutlineClose />
        </button>
      </div>
      <ul>
        <li>Home</li>
        <li>Add Locations</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
