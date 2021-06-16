
import { Route, HashRouter } from "react-router-dom";
import Home from "./Views/Home/Home";
import Header from "./Components/Header/Header";
import React from "react";
import Docs from "./Views/Docs/Docs";

function App() {
  return (
    <div className="App">
      {/* importing header component */}
      <Header />
      <HashRouter basename="/">
        <Route path="/" exact component={Home} />
        <Route path="/docs" exact component={Docs} />
      </HashRouter>
    </div>
  );
}

export default App;
