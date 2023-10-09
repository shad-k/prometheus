import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Header from "./ components/layout/Header";
import { DrawerContextProvider } from "./context/DrawerContext";

function App() {
  return (
    <main>
      <DrawerContextProvider>
        <Header />
        <RouterProvider router={router}></RouterProvider>
      </DrawerContextProvider>
    </main>
  );
}

export default App;
