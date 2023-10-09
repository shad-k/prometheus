import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./router";
import Header from "./components/layout/Header";
import { DrawerContextProvider } from "./context/DrawerContext";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <main className="flex flex-col w-full h-full">
        <DrawerContextProvider>
          <Header />
          <div className="w-full h-[calc(100%-120px)]">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </DrawerContextProvider>
      </main>
    </Provider>
  );
};

export default App;
