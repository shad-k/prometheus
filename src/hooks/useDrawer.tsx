import React from "react";
import DrawerContext from "../context/DrawerContext";

const useDrawer = () => {
  const { show, isOpen, hide } = React.useContext(DrawerContext);

  return { show, isOpen, hide };
};

export default useDrawer;
