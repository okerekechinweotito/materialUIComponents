import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePages from "./utilities/routePages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutePages />
      </div>
    </BrowserRouter>
  );
}

export default App;
