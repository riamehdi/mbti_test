import React from "react";
import AddThis from "./AddThis";
import IntegratedAdfitComponent from "./IntegratedAdfitComponent";

const Result = ({ result, description }) => {
  return (
    <div className="home__container">
      <h3 className="home__title">MBTI test</h3>
      <div className="result__container">
        <h4>{result}</h4>
        <p>{description}</p>
        <AddThis />
      </div>
      <button
        onClick={() => {
          window.location.replace("/");
        }}
      >
        mbti test 다시하기
      </button>

      <div className="adfit">
        <IntegratedAdfitComponent />
      </div>
    </div>
  );
};

export default Result;
