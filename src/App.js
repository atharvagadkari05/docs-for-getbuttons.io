
import { Route, HashRouter } from "react-router-dom";
import Home from "./Views/Home";
import Header from "./Components/Header/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      {/* importing header component */}
      <Header />
      <HashRouter basename="/">
        <Route path="/" exact component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
