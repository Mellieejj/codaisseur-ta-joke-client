import React from "react";
import NavBar from "./components/NavBar"
import Jokes from "./components/Jokes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jokes />
    </div>
  );
}

export default App;
