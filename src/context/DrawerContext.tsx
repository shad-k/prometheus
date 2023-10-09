import React from "react";
import Drawer from "../ components/layout/Drawer";

const DrawerContext = React.createContext({
  isOpen: false,
  hide: () => {},
  show: (content: React.ReactNode) => {},
});

export const DrawerContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = React.useState<React.ReactNode>();

  const show = (content: React.ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const hide = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, hide, show }}>
      {children}
      <Drawer content={content} />
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
