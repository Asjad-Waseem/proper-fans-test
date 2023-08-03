"use client";

import React from "react";

import Feed from "@/pages/feed";
import { AppProvider } from "../../context/context";
import reducer, { initialState } from "../../context/reducer";

const App = () => {
  return (
    <main className="overflow-hidden flex">
      <AppProvider reducer={reducer} initialState={initialState}>
        <Feed />
      </AppProvider>
    </main>
  );
};

export default App;
