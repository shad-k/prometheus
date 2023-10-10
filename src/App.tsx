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
      <DrawerContextProvider>
        <main className="flex flex-col w-full h-full">
          <Header />
          <div className="w-full h-[calc(100%-120px)]">
            <RouterProvider router={router} />
          </div>
        </main>
      </DrawerContextProvider>
    </Provider>
  );
};

export default App;
