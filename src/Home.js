import React from "react";
import { Link } from "react-router-dom";
import wc from "./img/wc.png";
const Home = () => {
  return (
    <div className="home__container">
      <h3 className="home__title ">Test MBTI Snoopy</h3>
      <img className="welcome_snoopy" src={wc} width="150px" />

      <div className="button_container">
        <Link to="/question">
          <button className="start_button">Commencer les tests</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
