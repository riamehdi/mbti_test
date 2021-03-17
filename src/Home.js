import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <h3 className="home__title">MBTI test</h3>
      <div className="home__description">
        mbti test를 시작하시려면 아래 버튼을 눌러주세요
      </div>
      <div className="button_container">
        <Link to="/question">
          <button className="start_button">mbti test 시작하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
