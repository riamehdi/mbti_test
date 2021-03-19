import React from "react";
import { Link } from "react-router-dom";
import wc from "./img/wc.png";
const Home = () => {
  return (
    <div className="home__container">
      <h3 className="home__title ">스누피 MBTI 테스트</h3>
      <img className="welcome_snoopy" src={wc} width="150px" />

      <div className="button_container">
        <Link to="/question">
          <button className="start_button">테스트 시작하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
