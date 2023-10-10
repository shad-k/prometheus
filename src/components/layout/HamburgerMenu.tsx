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
      <ul className="flex flex-col text-lg gap-3">
        <a href="/" className="hover:bg-white/10 p-2 rounded">
          Home
        </a>
        <a href="/addLocation" className="hover:bg-white/10 p-2 rounded">
          Add Location
        </a>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
