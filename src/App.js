import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

const App = () => {
  return (
    <AdminContext>
      <Navigation />
    </AdminContext>
  );
};

export default App;
