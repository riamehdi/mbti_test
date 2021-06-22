import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";
import Adfit1 from "./Adfit1";
import Adfit2 from "./Adfit2";
function App() {
  return (
    <body>
      <div className="wrapper">
        <div className="container">
          <Route path="/" component={Home} exact={true} />
          <Route path="/question" component={Question} />
        </div>
      </div>
    </body>
  );
}

export default App;
