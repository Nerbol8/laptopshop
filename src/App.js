import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";
import bgImage from "./videos/background.mp4";
const App = () => {
  return (
    <ClientContext>
      {/* <video className="videoApp" autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video> */}
      <AdminContext>
        <Navigation />
      </AdminContext>
    </ClientContext>
  );
};

export default App;
