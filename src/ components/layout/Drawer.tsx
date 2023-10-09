import React from "react";
import useDrawer from "../../hooks/useDrawer";

const Drawer: React.FC<{ content?: React.ReactNode }> = ({ content }) => {
  const { isOpen } = useDrawer();

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-full bg-black/50 flex justify-end">
      <div className="bg-primaryBlue w-[300px] translate-x-[100%] animate-drawer transition-translate shadow-lg">
        {content}
      </div>
    </div>
  );
};

export default Drawer;
