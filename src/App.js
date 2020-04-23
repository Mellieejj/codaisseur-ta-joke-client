import React from "react";
import store from "./store"
import {Provider} from "react-redux"
import NavBar from "./components/NavBar"
import Jokes from "./components/Jokes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <NavBar />
      <Jokes />
    </div>
    </Provider>
  );
}

export default App;
