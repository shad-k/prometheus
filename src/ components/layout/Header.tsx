import React from "react";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import useDrawer from "../../hooks/useDrawer";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const { show, hide } = useDrawer();

  const showHamburgerMenu = () => {
    show(<HamburgerMenu onClose={hide} />);
  };

  return (
    <header className="flex items-center justify-between h-[120px] px-[60px] py-6 bg-primaryBlue text-white">
      <div className="flex flex-col justify-center gap-4">
        <h3 className="text-3xl">Prometheus</h3>
        <p>You can add, edit and delete locations</p>
      </div>
      <div className="flex items-center gap-6">
        {isSearchOpen ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="h-8 w-0 animate-input-focus rounded-md px-2 text-black bg-white"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)} className="text-2xl">
              <AiOutlineCloseCircle />
            </button>
          </div>
        ) : (
          <button
            className="text-white text-2xl"
            onClick={() => setIsSearchOpen(true)}
          >
            <AiOutlineSearch />
          </button>
        )}
        <button className="text-white text-2xl" onClick={showHamburgerMenu}>
          <AiOutlineMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
