import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";
import IntegratedAdfitComponent from "./IntegratedAdfitComponent";
function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <Route path="/" component={Home} exact={true} />
          <Route path="/question" component={Question} />
        </div>
      </div>
      <div className="adfit">
        <IntegratedAdfitComponent />
        <IntegratedAdfitComponent />
      </div>
    </body>
  );
}

export default App;
